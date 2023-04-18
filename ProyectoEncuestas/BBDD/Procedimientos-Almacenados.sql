---------Procedimientos Almacenados para la Tabla de Aldeas---------
--Creaci�n Proceso Almacenado para Crear un Usuario
create procedure prc_Usuarios_Crear
@nombre nvarchar(50),
@telefono nvarchar (25),
@dni nvarchar(50),
@correo nvarchar(100),
@contra nvarchar(60),
@estado int,
@tipo int,
@sexo nvarchar(30)
As
Begin
	INSERT INTO [dbo].[tbl_Usuarios]
           ([nombre_Usuario]
           ,[telefono_Usuario]
           ,[dni_Usuario]
           ,[correo_Usuario]
           ,[create_At]
           ,[update_At]
           ,[id_Estado_Usuario]
           ,[id_Tipo_Usuario]
		   ,[sexo])
     VALUES
           (@nombre,@telefono,@dni,@correo,@contra,GETDATE(),GETDATE(),@estado,@tipo,@sexo)
End
--Creaci�n Proceso Almacenado para Buscar un Usuario
create procedure prc_Usuarios_Buscar_DNI
@dni nvarchar(50)
As
Begin
	select dbo.tbl_Usuarios.id_Usuario AS id, dbo.tbl_Usuarios.nombre_Usuario AS name, dbo.tbl_Usuarios.telefono_Usuario AS tel, dbo.tbl_Usuarios.dni_Usuario AS dni, dbo.tbl_Usuarios.correo_Usuario AS email, 
                  dbo.tbl_Usuarios.contrasenia_Usuario AS password,convert(nvarchar(10),dbo.tbl_Usuarios.create_At,23) AS creado, convert(nvarchar(10),dbo.tbl_Usuarios.update_At,23) AS cambio, dbo.tbl_Estados_Usuario.estado_Usuario AS estado, dbo.tbl_Tipos_Usuario.descripcion_Tipo AS tipo, 
                  dbo.tbl_Usuarios.sexo
	FROM     dbo.tbl_Estados_Usuario INNER JOIN
                  dbo.tbl_Usuarios ON dbo.tbl_Estados_Usuario.id_Estado_Usuario = dbo.tbl_Usuarios.id_Estado_Usuario INNER JOIN
                  dbo.tbl_Tipos_Usuario ON dbo.tbl_Usuarios.id_Tipo_Usuario = dbo.tbl_Tipos_Usuario.id_Tipo_Usuario
	where dbo.tbl_Usuarios.dni_Usuario LIKE '%'+@dni+'%'
End
--Procedimineto Almacenado para buscar un usuario por su ID
Create Procedure prc_Usuarios_Buscar_ID
	@id int as begin
	SELECT dbo.tbl_Usuarios.id_Usuario AS id, dbo.tbl_Usuarios.nombre_Usuario AS name, dbo.tbl_Usuarios.telefono_Usuario AS tel, dbo.tbl_Usuarios.dni_Usuario AS dni, dbo.tbl_Usuarios.correo_Usuario AS email, 
                  dbo.tbl_Usuarios.contrasenia_Usuario AS password,convert(nvarchar(10),dbo.tbl_Usuarios.create_At,23) AS creado, convert(nvarchar(10),dbo.tbl_Usuarios.update_At,23) AS cambio, dbo.tbl_Estados_Usuario.estado_Usuario AS estado, dbo.tbl_Tipos_Usuario.descripcion_Tipo AS tipo, 
                  dbo.tbl_Usuarios.sexo
	FROM     dbo.tbl_Estados_Usuario INNER JOIN
                  dbo.tbl_Usuarios ON dbo.tbl_Estados_Usuario.id_Estado_Usuario = dbo.tbl_Usuarios.id_Estado_Usuario INNER JOIN
                  dbo.tbl_Tipos_Usuario ON dbo.tbl_Usuarios.id_Tipo_Usuario = dbo.tbl_Tipos_Usuario.id_Tipo_Usuario
	where dbo.tbl_Usuarios.id_Usuario=@id
end
--Procedimiento Almacenado para desactivar/activar un usuario
Create Procedure prc_Usuarios_Cambiar_Estado
@id int,
@estado int
as begin
	UPDATE [dbo].[tbl_Usuarios]
	SET
	[id_Estado_Usuario] = @estado

 WHERE id_Usuario=@id
end
--Procedimiento Almacenado para restablecer la contrase�a de un usuario
Create Procedure prc_Usuarios_Cambiar_Restablecer_Passsword
@id int,
@password nvarchar(60)
as begin
	UPDATE [dbo].[tbl_Usuarios]
	SET [contrasenia_Usuario] = @password
 WHERE id_Usuario=@id
end
--Procedimiento Almacenado para buscar la existencia de un correo
create procedure prc_Usuarios_Buscar_Email 
@email nvarchar(100)
As
Begin
	SELECT id_Usuario,nombre_Usuario,correo_Usuario
	FROM     dbo.tbl_Usuarios
	where correo_Usuario=@email

End
--Procedimiento Almacenado para buscar las asignaciones de un usuario
create procedure prc_Usuarios_Asignaciones_Listar
@id int as begin
	SELECT dbo.tbl_Asignacion_Usuario.id_Asignacion AS id, dbo.tbl_Municipios.municipio AS mun, dbo.tbl_Departamentos.departamento AS dep, dbo.tbl_Asignacion_Usuario.estado_Asignacion AS estado
	FROM     dbo.tbl_Asignacion_Usuario INNER JOIN
                  dbo.tbl_Municipios ON dbo.tbl_Asignacion_Usuario.id_Municipio = dbo.tbl_Municipios.id_Municipio INNER JOIN
                  dbo.tbl_Departamentos ON dbo.tbl_Municipios.id_Departamento = dbo.tbl_Departamentos.id_Departamento
	where id_Usuario=@id AND estado_Asignacion=1
	Order By dbo.tbl_Departamentos.departamento
end
--Procedimiento almacenado para buscar los municipios que el usuario aun no tiene asignados
create procedure prc_Usuarios_Asignaciones_Sin_Asignar
@dep nvarchar(10),
@id int
as begin
	SELECT dbo.tbl_Departamentos.id_Departamento AS id_dep, dbo.tbl_Departamentos.departamento AS dep, dbo.tbl_Municipios.id_Municipio AS id_mun, dbo.tbl_Municipios.municipio AS mun
	FROM     dbo.tbl_Departamentos INNER JOIN
             dbo.tbl_Municipios ON dbo.tbl_Departamentos.id_Departamento = dbo.tbl_Municipios.id_Departamento
	where tbl_Municipios.id_Departamento=@dep
	Except
	SELECT dbo.tbl_Departamentos.id_Departamento AS id_dep, dbo.tbl_Departamentos.departamento AS dep, m.id_Municipio AS id_mun, m.municipio AS mun
	FROM     dbo.tbl_Departamentos INNER JOIN
             dbo.tbl_Municipios as m ON dbo.tbl_Departamentos.id_Departamento = m.id_Departamento
			 inner join dbo.tbl_Asignacion_Usuario as a on a.id_Municipio=m.id_Municipio
	where a.id_Usuario=@id
end
--Procedimiento Almacenado para crear una nueva aignaci�n a un usuario
create procedure prc_Usuarios_Asignaciones_Crear
@id int,
@mun nvarchar(10),
@estado bit
as begin
INSERT INTO [dbo].[tbl_Asignacion_Usuario]
           ([id_Usuario]
           ,[id_Municipio]
           ,[estado_Asignacion])
     VALUES
           (@id,@mun,@estado)
end
--Procedimiento Almacenado para obtener el id de una asignaci�n
create procedure prc_Usuarios_Asignaciones_ID
@id int as begin
	SELECT dbo.tbl_Asignacion_Usuario.id_Asignacion AS id, dbo.tbl_Municipios.municipio AS mun, dbo.tbl_Departamentos.departamento AS dep, dbo.tbl_Asignacion_Usuario.estado_Asignacion AS estado
	FROM     dbo.tbl_Asignacion_Usuario INNER JOIN
                  dbo.tbl_Municipios ON dbo.tbl_Asignacion_Usuario.id_Municipio = dbo.tbl_Municipios.id_Municipio INNER JOIN
                  dbo.tbl_Departamentos ON dbo.tbl_Municipios.id_Departamento = dbo.tbl_Departamentos.id_Departamento
	where id_Asignacion=@id
end
--Procedimiento Almacenado para cambiar el estado de una asignaci�n
create procedure prc_Usuarios_Asignaciones_Cambiar_Estado
@id int,
@estado bit as begin
	UPDATE [dbo].[tbl_Asignacion_Usuario]
	SET [estado_Asignacion] = @estado
	WHERE id_Asignacion=@id
end
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--Creaci�n Procedimientos Almacenados  de Servicios
--Creaci�n Procedimiento Almacenado para Listar Servicios Locales
create procedure prc_Servicios_Locales_Listar
as
begin
	SELECT dbo.tbl_Servicios.id_Servicio AS id, dbo.tbl_Servicios.servicio, dbo.tbl_Tipo_Servicios.tipo_Servicio AS tipo, dbo.tbl_Servicios.estado_Servicio AS estado
	FROM     dbo.tbl_Tipo_Servicios INNER JOIN
                  dbo.tbl_Servicios ON dbo.tbl_Tipo_Servicios.id_Tipo_Servicio = dbo.tbl_Servicios.id_Tipo_Servicio
	where estado_Servicio=1 and dbo.tbl_Servicios.id_Tipo_Servicio=1
	order by id_Servicio
end
--Creaci�n Procedimiento Almacenado para Listar Servicios Locales Desactivados
create procedure prc_Servicios_Locales_Listar_Desactivados
as
begin
	SELECT dbo.tbl_Servicios.id_Servicio AS id, dbo.tbl_Servicios.servicio, dbo.tbl_Tipo_Servicios.tipo_Servicio AS tipo, dbo.tbl_Servicios.estado_Servicio AS estado
	FROM     dbo.tbl_Tipo_Servicios INNER JOIN
                  dbo.tbl_Servicios ON dbo.tbl_Tipo_Servicios.id_Tipo_Servicio = dbo.tbl_Servicios.id_Tipo_Servicio
	where estado_Servicio=0 and dbo.tbl_Servicios.id_Tipo_Servicio=1
	order by id_Servicio
end

--Creaci�n Procedimiento Almacenado para Cambiar el estado de un  Servicio Local
create procedure prc_Servicio_Put_Estado
@id int,
@est bit
as
begin
UPDATE [dbo].[tbl_Servicios]
   SET [estado_Servicio] = @est
 WHERE [id_Servicio]=@id
end

--Creaci�n Procedimiento Almacenado para Listar Servicios Basicos
create procedure prc_Servicios_Basicos_Listar
as
begin
	SELECT dbo.tbl_Servicios.id_Servicio AS id, dbo.tbl_Servicios.servicio, dbo.tbl_Tipo_Servicios.tipo_Servicio AS tipo, dbo.tbl_Servicios.estado_Servicio AS estado
	FROM     dbo.tbl_Tipo_Servicios INNER JOIN
                  dbo.tbl_Servicios ON dbo.tbl_Tipo_Servicios.id_Tipo_Servicio = dbo.tbl_Servicios.id_Tipo_Servicio
	where estado_Servicio=1 and dbo.tbl_Servicios.id_Tipo_Servicio=2
	order by id_Servicio
end
--Creaci�n Procedimiento Almacenado para Listar Servicios Basicos Desactivados
create procedure prc_Servicios_Basicos_Listar_Desactivados
as
begin
	SELECT dbo.tbl_Servicios.id_Servicio AS id, dbo.tbl_Servicios.servicio, dbo.tbl_Tipo_Servicios.tipo_Servicio AS tipo, dbo.tbl_Servicios.estado_Servicio AS estado
	FROM     dbo.tbl_Tipo_Servicios INNER JOIN
                  dbo.tbl_Servicios ON dbo.tbl_Tipo_Servicios.id_Tipo_Servicio = dbo.tbl_Servicios.id_Tipo_Servicio
	where estado_Servicio=0 and dbo.tbl_Servicios.id_Tipo_Servicio=2
	order by id_Servicio
end
--Creacion Procedimientos Almacenados para la tabla de Encuesta
Create procedure prc_Usuarios_Encuestas
@id int
as
begin
	SELECT e.id_Encuesta as id, dep.departamento as dep,mun.municipio as mun,aldea.aldea,caserio.caserio,e.direccion_Sede as [address],
	e.total_Hombres as hombres, e.total_Mujeres as mujeres, e.total_Asistencia as total, org.descripcion_Organizacion as org, e.existencia_Rio as rios,
	e.cantidad_Rio as cant_rios,e.existencia_Bosque as bosques,bosque.tipo_Bosque as tipo_bosque, suelo.descripcion_Suelo as suelo, tenencia.descripcion_Tenencia as tenencia,
	merca.descripcion_Mercado as mercado, tecno.id_Tecno as tecno, convert(nvarchar(10),e.fecha_Encuesta,23)  AS fecha ,
	convert(char(8), e.fecha_Encuesta,108) as hora,users.nombre_Usuario as [user]
	From tbl_Encuestas as e
	Join tbl_Departamentos as dep on dep.id_Departamento=E.id_Departamento
	Join tbl_Municipios as mun on mun.id_Municipio=e.id_Municipio
	Join tbl_Aldeas as aldea on aldea.id_Aldea=e.id_Aldea
	Join tbl_Caserios as caserio on caserio.id_Caserio=e.id_Caserio
	Join tbl_Organizaciones as org on org.id_Organizacion = e.id_Organizacion
	Join tbl_Tipos_Bosque as bosque on bosque.id_Tipo_Bosque=e.id_Tipo_Bosque
	Join tbl_Suelos as suelo on suelo.id_Suelo=e.id_Suelo
	Join tbl_Tenencia_Tierra as tenencia on tenencia.id_Tenencia=e.id_Tenencia
	Join tbl_Mercados as merca on merca.id_Mercado = e.id_Mercado
	Join tbl_Tecnologico_General as tecno on tecno.id_Tecno=e.id_Tecno
	Join tbl_Usuarios as users on users.id_Usuario=e.id_Usuario
	where e.id_Usuario=@id
	Order by e.id_Departamento
end
--Procedimiento Almacenado para listar encuestas por departamento
Create procedure prc_Encuestas_Departamento
@id nvarchar(10)
as
begin
	SELECT e.id_Encuesta as id, dep.departamento as dep,mun.municipio as mun,aldea.aldea,caserio.caserio,e.direccion_Sede as [address],
	e.total_Hombres as hombres, e.total_Mujeres as mujeres, e.total_Asistencia as total, org.descripcion_Organizacion as org, e.existencia_Rio as rios,
	e.cantidad_Rio as cant_rios,e.existencia_Bosque as bosques,bosque.tipo_Bosque as tipo_bosque, suelo.descripcion_Suelo as suelo, tenencia.descripcion_Tenencia as tenencia,
	merca.descripcion_Mercado as mercado, tecno.id_Tecno as tecno, convert(nvarchar(10),e.fecha_Encuesta,23)  AS fecha ,
	convert(char(8), e.fecha_Encuesta,108) as hora,users.nombre_Usuario as [user]
	From tbl_Encuestas as e
	Join tbl_Departamentos as dep on dep.id_Departamento=E.id_Departamento
	Join tbl_Municipios as mun on mun.id_Municipio=e.id_Municipio
	Join tbl_Aldeas as aldea on aldea.id_Aldea=e.id_Aldea
	Join tbl_Caserios as caserio on caserio.id_Caserio=e.id_Caserio
	Join tbl_Organizaciones as org on org.id_Organizacion = e.id_Organizacion
	Join tbl_Tipos_Bosque as bosque on bosque.id_Tipo_Bosque=e.id_Tipo_Bosque
	Join tbl_Suelos as suelo on suelo.id_Suelo=e.id_Suelo
	Join tbl_Tenencia_Tierra as tenencia on tenencia.id_Tenencia=e.id_Tenencia
	Join tbl_Mercados as merca on merca.id_Mercado = e.id_Mercado
	Join tbl_Tecnologico_General as tecno on tecno.id_Tecno=e.id_Tecno
	Join tbl_Usuarios as users on users.id_Usuario=e.id_Usuario
	where e.id_Departamento=@id
end
--Procedimiento Almacenado para listar encuestas por departamento y usuario
Create procedure prc_Encuestas_Departamento_User
@id nvarchar(10),
@idUser int
as
begin
	SELECT e.id_Encuesta as id, dep.departamento as dep,mun.municipio as mun,aldea.aldea,caserio.caserio,e.direccion_Sede as [address],
	e.total_Hombres as hombres, e.total_Mujeres as mujeres, e.total_Asistencia as total, org.descripcion_Organizacion as org, e.existencia_Rio as rios,
	e.cantidad_Rio as cant_rios,e.existencia_Bosque as bosques,bosque.tipo_Bosque as tipo_bosque, suelo.descripcion_Suelo as suelo, tenencia.descripcion_Tenencia as tenencia,
	merca.descripcion_Mercado as mercado, tecno.id_Tecno as tecno, convert(nvarchar(10),e.fecha_Encuesta,23)  AS fecha ,
	convert(char(8), e.fecha_Encuesta,108) as hora,users.nombre_Usuario as [user]
	From tbl_Encuestas as e
	Join tbl_Departamentos as dep on dep.id_Departamento=E.id_Departamento
	Join tbl_Municipios as mun on mun.id_Municipio=e.id_Municipio
	Join tbl_Aldeas as aldea on aldea.id_Aldea=e.id_Aldea
	Join tbl_Caserios as caserio on caserio.id_Caserio=e.id_Caserio
	Join tbl_Organizaciones as org on org.id_Organizacion = e.id_Organizacion
	Join tbl_Tipos_Bosque as bosque on bosque.id_Tipo_Bosque=e.id_Tipo_Bosque
	Join tbl_Suelos as suelo on suelo.id_Suelo=e.id_Suelo
	Join tbl_Tenencia_Tierra as tenencia on tenencia.id_Tenencia=e.id_Tenencia
	Join tbl_Mercados as merca on merca.id_Mercado = e.id_Mercado
	Join tbl_Tecnologico_General as tecno on tecno.id_Tecno=e.id_Tecno
	Join tbl_Usuarios as users on users.id_Usuario=e.id_Usuario
	where e.id_Departamento=@id and e.id_Usuario=@idUser
end
--Procedimiento Almacenado para buscar encuestas por municipio
Create procedure prc_Encuestas_Municipio
@id nvarchar(10)
as
begin
	SELECT e.id_Encuesta as id, dep.departamento as dep,mun.municipio as mun,aldea.aldea,caserio.caserio,e.direccion_Sede as [address],
	e.total_Hombres as hombres, e.total_Mujeres as mujeres, e.total_Asistencia as total, org.descripcion_Organizacion as org, e.existencia_Rio as rios,
	e.cantidad_Rio as cant_rios,e.existencia_Bosque as bosques,bosque.tipo_Bosque as tipo_bosque, suelo.descripcion_Suelo as suelo, tenencia.descripcion_Tenencia as tenencia,
	merca.descripcion_Mercado as mercado, tecno.id_Tecno as tecno, convert(nvarchar(10),e.fecha_Encuesta,23)  AS fecha ,
	convert(char(8), e.fecha_Encuesta,108) as hora,users.nombre_Usuario as [user]
	From tbl_Encuestas as e
	Join tbl_Departamentos as dep on dep.id_Departamento=E.id_Departamento
	Join tbl_Municipios as mun on mun.id_Municipio=e.id_Municipio
	Join tbl_Aldeas as aldea on aldea.id_Aldea=e.id_Aldea
	Join tbl_Caserios as caserio on caserio.id_Caserio=e.id_Caserio
	Join tbl_Organizaciones as org on org.id_Organizacion = e.id_Organizacion
	Join tbl_Tipos_Bosque as bosque on bosque.id_Tipo_Bosque=e.id_Tipo_Bosque
	Join tbl_Suelos as suelo on suelo.id_Suelo=e.id_Suelo
	Join tbl_Tenencia_Tierra as tenencia on tenencia.id_Tenencia=e.id_Tenencia
	Join tbl_Mercados as merca on merca.id_Mercado = e.id_Mercado
	Join tbl_Tecnologico_General as tecno on tecno.id_Tecno=e.id_Tecno
	Join tbl_Usuarios as users on users.id_Usuario=e.id_Usuario
	where e.id_Municipio=@id
end

--Procedimiento Almacenado para listar encuestas por Municipio y usuario
Create procedure prc_Encuestas_Municipio_User
@id nvarchar(10),
@idUser int
as
begin
	SELECT e.id_Encuesta as id, dep.departamento as dep,mun.municipio as mun,aldea.aldea,caserio.caserio,e.direccion_Sede as [address],
	e.total_Hombres as hombres, e.total_Mujeres as mujeres, e.total_Asistencia as total, org.descripcion_Organizacion as org, e.existencia_Rio as rios,
	e.cantidad_Rio as cant_rios,e.existencia_Bosque as bosques,bosque.tipo_Bosque as tipo_bosque, suelo.descripcion_Suelo as suelo, tenencia.descripcion_Tenencia as tenencia,
	merca.descripcion_Mercado as mercado, tecno.id_Tecno as tecno, convert(nvarchar(10),e.fecha_Encuesta,23)  AS fecha ,
	convert(char(8), e.fecha_Encuesta,108) as hora,users.nombre_Usuario as [user]
	From tbl_Encuestas as e
	Join tbl_Departamentos as dep on dep.id_Departamento=E.id_Departamento
	Join tbl_Municipios as mun on mun.id_Municipio=e.id_Municipio
	Join tbl_Aldeas as aldea on aldea.id_Aldea=e.id_Aldea
	Join tbl_Caserios as caserio on caserio.id_Caserio=e.id_Caserio
	Join tbl_Organizaciones as org on org.id_Organizacion = e.id_Organizacion
	Join tbl_Tipos_Bosque as bosque on bosque.id_Tipo_Bosque=e.id_Tipo_Bosque
	Join tbl_Suelos as suelo on suelo.id_Suelo=e.id_Suelo
	Join tbl_Tenencia_Tierra as tenencia on tenencia.id_Tenencia=e.id_Tenencia
	Join tbl_Mercados as merca on merca.id_Mercado = e.id_Mercado
	Join tbl_Tecnologico_General as tecno on tecno.id_Tecno=e.id_Tecno
	Join tbl_Usuarios as users on users.id_Usuario=e.id_Usuario
	where e.id_Municipio=@id and e.id_Usuario=@idUser
end
--Procedimiento almacenado para Obtener los departamentos asignados a un usuario de un usuario
Create procedure prc_Encuestas_Departamentos
@id int
as
begin
	SELECT Distinct dbo.tbl_Asignacion_Usuario.id_Usuario as id, dbo.tbl_Departamentos.id_Departamento id_dep, dbo.tbl_Departamentos.departamento as dep
	FROM     dbo.tbl_Asignacion_Usuario INNER JOIN
					  dbo.tbl_Municipios ON dbo.tbl_Asignacion_Usuario.id_Municipio = dbo.tbl_Municipios.id_Municipio INNER JOIN
					  dbo.tbl_Departamentos ON dbo.tbl_Municipios.id_Departamento = dbo.tbl_Departamentos.id_Departamento
	where id_Usuario=@id
end

--Procedimiento Almacenado para obtener los Municipios Asignados al usuario
Create procedure prc_Encuestas_Municipios
@id int,
@dep nvarchar(10)
as
begin
	SELECT dbo.tbl_Asignacion_Usuario.id_Usuario AS id, dbo.tbl_Asignacion_Usuario.id_Municipio AS id_mun, dbo.tbl_Municipios.municipio AS mun
	FROM     dbo.tbl_Departamentos INNER JOIN
					  dbo.tbl_Municipios ON dbo.tbl_Departamentos.id_Departamento = dbo.tbl_Municipios.id_Departamento INNER JOIN
					  dbo.tbl_Asignacion_Usuario ON dbo.tbl_Municipios.id_Municipio = dbo.tbl_Asignacion_Usuario.id_Municipio
	where dbo.tbl_Asignacion_Usuario.id_Usuario=@id and dbo.tbl_Departamentos.id_Departamento=@dep
end
--Procedimiento Almacenado para obtener las Aldeas Asignados al usuario
create procedure prc_Encuestas_Aldeas
@id nvarchar(10)
as begin
	SELECT id_Aldea AS id, id_Municipio AS id_mun, aldea
	FROM     dbo.tbl_Aldeas
	where id_Municipio=@id
	except
	Select e.id_Aldea as id, e.id_Municipio as id_mun, a.aldea
	from tbl_Encuestas as e inner join tbl_Aldeas as a on a.id_Aldea = e.id_Aldea
end
--Procedimiento Almacenado para obtener las Aldeas Asignados al usuario
create procedure prc_Encuestas_Caserios
@id nvarchar(10)
as begin
	SELECT id_Caserio AS id, id_Aldea AS id_aldea, caserio
	FROM dbo.tbl_Caserios
	where id_Aldea=@id
end
--Procedimiento para organizaciones sociales productivas
--Procedimiento para Organizaciones Estatales
--Procedimiento para Asignacion de municipios a usuarios
create procedure prc_Usuarios_Asignar_Municipios_Listar
@dep as nvarchar(10),
@user as int
as begin
	SELECT mun.id_Departamento as id_dep, mun.id_Municipio AS id, mun.municipio AS mun
	FROM     dbo.tbl_Municipios mun where  mun.id_Departamento=@dep
	EXCEPT  
	SELECT M.id_Departamento as id_dep, A.id_Municipio AS id,M.municipio AS mun
	FROM     dbo.tbl_Asignacion_Usuario A INNER JOIN
                  dbo.tbl_Municipios M ON A.id_Municipio =M.id_Municipio
	where A.id_Usuario=@user
end
--Procedimientos Almacenados para el Modulo de Junta Directiva
--Procedimientos Almacenados para los Cargos
--Procedimiento Almacenado para Buscar un cargo por su id
create procedure prc_Cargos_Buscar
@id int
as begin
	SELECT id_Cargo AS id, descripcion_Cargo AS cargo, estado_Cargo AS estado
	FROM     dbo.tbl_Cargos
	where id_Cargo=@id
end
--Procedimientos Almacenados para las Ubicaciones
--Procedimiento Alamacenado para buscar un departamento por el nombre
create procedure prc_Departamentos_Buscar
@dep nvarchar(17)
as begin
		SELECT id_Departamento AS id_dep, departamento AS dep
		FROM     dbo.tbl_Departamentos
		where departamento like '%'+@dep+'%'
end
--Procedimiento Almacenado para Buscar Municipio
create procedure prc_Municipios_Buscar
@municipio nvarchar(50)
as begin
	SELECT dbo.tbl_Departamentos.id_Departamento AS id_dep, dbo.tbl_Departamentos.departamento AS dep, dbo.tbl_Municipios.id_Municipio AS id_mun, dbo.tbl_Municipios.municipio AS mun
	FROM     dbo.tbl_Departamentos INNER JOIN
                  dbo.tbl_Municipios ON dbo.tbl_Departamentos.id_Departamento = dbo.tbl_Municipios.id_Departamento
	where municipio like '%'+@municipio+'%'
end
--Procedimiento Almacenado para Buscar Aldea
create procedure prc_Aldeas_Buscar
@aldea nvarchar(50)
as begin
	SELECT dbo.tbl_Departamentos.id_Departamento AS id_dep, dbo.tbl_Departamentos.departamento AS dep, dbo.tbl_Municipios.id_Municipio AS id_mun, dbo.tbl_Municipios.municipio AS mun, dbo.tbl_Aldeas.id_Aldea AS id_aldea, 
					  dbo.tbl_Aldeas.aldea
	FROM     dbo.tbl_Departamentos INNER JOIN
    dbo.tbl_Municipios ON dbo.tbl_Departamentos.id_Departamento = dbo.tbl_Municipios.id_Departamento INNER JOIN
    dbo.tbl_Aldeas ON dbo.tbl_Municipios.id_Municipio = dbo.tbl_Aldeas.id_Municipio
	where aldea like '%'+@aldea+'%'
end
--Procedimiento Almacenado para Buscar Caserios
create procedure prc_Caserios_Buscar
@caserio nvarchar(70)
as begin
	SELECT dbo.tbl_Departamentos.id_Departamento AS id_dep, dbo.tbl_Departamentos.departamento AS dep, dbo.tbl_Municipios.id_Municipio AS id_mun, dbo.tbl_Municipios.municipio AS mun, dbo.tbl_Aldeas.id_Aldea AS id_aldea, 
					  dbo.tbl_Aldeas.aldea, dbo.tbl_Caserios.id_Caserio AS id_caserio, dbo.tbl_Caserios.caserio
	FROM     dbo.tbl_Departamentos INNER JOIN
					  dbo.tbl_Municipios ON dbo.tbl_Departamentos.id_Departamento = dbo.tbl_Municipios.id_Departamento INNER JOIN
					  dbo.tbl_Aldeas ON dbo.tbl_Municipios.id_Municipio = dbo.tbl_Aldeas.id_Municipio INNER JOIN
					  dbo.tbl_Caserios ON dbo.tbl_Aldeas.id_Aldea = dbo.tbl_Caserios.id_Aldea
	where caserio like '%'+@caserio+'%'
end
--Buscar Municipios de un Departamento
create procedure prc_Departamentos_Buscar_Municipios
@id int
as begin
	select id_Municipio as id_mun,id_Departamento as id_dep, municipio as mun
	from tbl_Municipios
	where id_Departamento=@id
end
--Creacion de Procedimientos Almacenados para el Modulo de Autentificaci�n Login
--Procedimiento almacenado para verificar si existe un usuario por medio del email
create procedure prc_Auth_Login_Email
@email nvarchar(100)
as begin
	select id_Usuario as id, contrasenia_Usuario as [password],id_Tipo_Usuario as tipo
	from tbl_Usuarios
	where correo_Usuario=@email and id_Estado_Usuario=1
end
----------------------------------------------------------------------------------------------------------------------------------------------
--Creacion de Procedimientos Almacenados para el Modulo de Junta Directiva
--Procedimiento Almacenado para Crear un Eje
create procedure prc_Ejes_Agregar
@eje nvarchar(250),
@estado bit
as begin
	INSERT INTO [dbo].[tbl_Ejes]
			   ([descripcion_Eje]
			   ,[estado_Eje])
     VALUES (@eje,@estado)           
end
--Procedimiento Almacenado para Editar un Eje
create procedure prc_Ejes_Editar
@id int,
@eje nvarchar(250)
as begin
	 UPDATE [dbo].[tbl_Ejes]
	   SET [descripcion_Eje] = @eje	
	 WHERE id_Eje=@id
end
--Procedimiento Almacenado para Buscar un Eje
create procedure prc_Ejes_Buscar_Eje
@eje nvarchar(250)
as begin
	select id_Eje
	from tbl_Ejes
	where descripcion_Eje=@eje
end
--Procedimiento Almacenado para buscar un eje por ID
Create procedure prc_Ejes_Buscar_ID
@id int as begin
	SELECT id_Eje AS id, descripcion_Eje AS eje, estado_Eje AS estado
	FROM    dbo.tbl_Ejes
	where id_Eje=@id
end
--Procedimiento Almacenado para Crear un Cargo
create procedure prc_Cargos_Agregar
@cargo nvarchar(30),
@estado bit
as begin
	INSERT INTO [dbo].[tbl_Cargos]
           ([descripcion_Cargo]
           ,[estado_Cargo])
    VALUES (@cargo,@estado)
end
--Procedimiento Almacenado para Buscar un Cargo
create procedure prc_Cargos_Verificcar_Cargo
@cargo nvarchar(30)
as begin
	select id_Cargo as id
	from tbl_Cargos
	where descripcion_Cargo=@cargo
end
--Procedimiento Almacenado para Listar la Escolaridades
create procedure prc_Escolaridad_Listar
as begin
	SELECT id_Escolaridad AS id, grado_Escolaridad AS grado, estado
	FROM     dbo.tbl_Grado_Escolaridad
	where estado=1
	Order By id_Escolaridad
end
--Procedimiento Almacenado para buscar una escolaridad por su nombre
create procedure prc_Escolaridad_Buscar
@grado nvarchar(100)
as begin
	SELECT id_Escolaridad AS id, grado_Escolaridad AS grado, estado
	FROM     dbo.tbl_Grado_Escolaridad
	where grado_Escolaridad=@grado
end
--Procedimiento Almacenado para buscar una escolaridad por su ID
create procedure prc_Escolaridad_Buscar_ID
@id int
as begin
	SELECT id_Escolaridad AS id, grado_Escolaridad AS grado, estado
	FROM     dbo.tbl_Grado_Escolaridad
	where id_Escolaridad=@id
end
--Procedimineto Almacenado para listar los Grados de Escolaridad Desactivados
create procedure prc_Escolaridad_Listar_Desactivados
as begin
	SELECT id_Escolaridad AS id, grado_Escolaridad AS grado, estado
	FROM     dbo.tbl_Grado_Escolaridad
	where estado=0
	Order By grado_Escolaridad
end
--Procedimiento Almacenado para Agregar una Escolaridad
create procedure prc_Escolaridad_Agregar
@grado nvarchar(100),
@estado bit
as begin
	INSERT INTO [dbo].[tbl_Grado_Escolaridad]
           ([grado_Escolaridad]
           ,[estado])
     VALUES
           (@grado,@estado)
end
--Procedimiento Almacenado para Cambiar el estado de una Escolaridad
create procedure prc_Escolaridad_Cambiar_Estado
@id int,
@estado bit
as begin
	UPDATE [dbo].[tbl_Grado_Escolaridad]
	   SET [estado] = @estado
	 WHERE id_Escolaridad=@id
end
--Procedimiento Almacenado para Editar el nombre de una Escolaridad
create procedure prc_Escolaridad_Cambiar_Nombre
@id int,
@grado nvarchar(100)
as begin
	UPDATE [dbo].[tbl_Grado_Escolaridad]
	   SET [grado_Escolaridad] = @grado
	 WHERE id_Escolaridad=@id
end
----------------------------------------------------------------------------------------------------------------------------------------------
--Creacion Precedimiento Listar Municipios por Departamento
Create procedure prc_Municipios_By_Dep
@id nvarchar(10)
as begin
	SELECT dbo.tbl_Departamentos.id_Departamento AS id_dep, dbo.tbl_Departamentos.departamento AS dep, dbo.tbl_Municipios.id_Municipio AS id_mun, dbo.tbl_Municipios.municipio AS mun
	FROM     dbo.tbl_Departamentos INNER JOIN
			 dbo.tbl_Municipios ON dbo.tbl_Departamentos.id_Departamento = dbo.tbl_Municipios.id_Departamento
	where dbo.tbl_Municipios.id_Departamento = @id
end
--Procedimiento almacenado para crear una encuesta
create procedure prc_Encuestas_Crear
  @hombres int
 ,@mujeres int
 ,@total int
 ,@dep nvarchar(10)
 ,@mun nvarchar(10)
 ,@aldea nvarchar(10)
 ,@caserio nvarchar(10)
 ,@address nvarchar(250)
 ,@org int
 ,@rios nvarchar(2)
 ,@cant_rios int
 ,@bosques nvarchar(2)
 ,@tipo_bosque int
 ,@suelo int
 ,@tenencia int
 ,@mercado int
 ,@tecno int
 ,@user int
as begin
	INSERT INTO [dbo].[tbl_Encuestas]
           ([total_Hombres]
           ,[total_Mujeres]
           ,[total_Asistencia]
           ,[id_Departamento]
           ,[id_Municipio]
           ,[id_Aldea]
           ,[id_Caserio]
           ,[direccion_Sede]
           ,[id_Organizacion]
           ,[existencia_Rio]
           ,[cantidad_Rio]
           ,[existencia_Bosque]
           ,[id_Tipo_Bosque]
           ,[id_Suelo]
           ,[id_Tenencia]
           ,[id_Mercado]
           ,[id_Tecno]
           ,[fecha_Encuesta]
           ,[id_Usuario])
	output inserted.id_Encuesta
	VALUES
           (@hombres,
			@mujeres,
			@total,
			@dep,
			@mun,
			@aldea,
			@caserio,
			@address,
			@org,
			@rios,
			@cant_rios,
			@bosques,
			@tipo_bosque,
			@suelo,
			@tenencia,
			@mercado,
			@tecno,
			GETDATE(),
			@user
			)
end
--Reiniciar id en 1
--DBCC CHECKIDENT ( [tbl_Tipos_Organizacion], RESEED, 2);
