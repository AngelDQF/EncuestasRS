---------Procedimientos Almacenados para la Tabla de Aldeas---------
--Creación Proceso Almacenado para Crear un Usuario
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
--Creación Proceso Almacenado para Buscar un Usuario
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
--Procedimiento Almacenado para restablecer la contraseña de un usuario
Create Procedure prc_Usuarios_Restablecer_Passsword
@id int,
@password nvarchar(60)
as begin
	UPDATE [dbo].[tbl_Usuarios]
	SET [contrasenia_Usuario] = @password,
		[update_At]=GETDATE()
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
--Procedimiento Almacenado para crear una nueva aignación a un usuario
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
--Procedimiento Almacenado para obtener el id de una asignación
create procedure prc_Usuarios_Asignaciones_ID
@id int as begin
	SELECT dbo.tbl_Asignacion_Usuario.id_Asignacion AS id, dbo.tbl_Municipios.municipio AS mun, dbo.tbl_Departamentos.departamento AS dep, dbo.tbl_Asignacion_Usuario.estado_Asignacion AS estado
	FROM     dbo.tbl_Asignacion_Usuario INNER JOIN
                  dbo.tbl_Municipios ON dbo.tbl_Asignacion_Usuario.id_Municipio = dbo.tbl_Municipios.id_Municipio INNER JOIN
                  dbo.tbl_Departamentos ON dbo.tbl_Municipios.id_Departamento = dbo.tbl_Departamentos.id_Departamento
	where id_Asignacion=@id
end
--Procedimiento Almacenado para cambiar el estado de una asignación
create procedure prc_Usuarios_Asignaciones_Cambiar_Estado
@id int,
@estado bit as begin
	UPDATE [dbo].[tbl_Asignacion_Usuario]
	SET [estado_Asignacion] = @estado
	WHERE id_Asignacion=@id
end
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--Creación Procedimientos Almacenados  de Servicios
--Creación Procedimiento Almacenado para Listar Servicios Locales
create procedure prc_Servicios_Locales_Listar
as
begin
	SELECT dbo.tbl_Servicios.id_Servicio AS id, dbo.tbl_Servicios.servicio, dbo.tbl_Tipo_Servicios.tipo_Servicio AS tipo, dbo.tbl_Servicios.estado_Servicio AS estado
	FROM     dbo.tbl_Tipo_Servicios INNER JOIN
                  dbo.tbl_Servicios ON dbo.tbl_Tipo_Servicios.id_Tipo_Servicio = dbo.tbl_Servicios.id_Tipo_Servicio
	where estado_Servicio=1 and dbo.tbl_Servicios.id_Tipo_Servicio=1
	order by id_Servicio
end
--Creación Procedimiento Almacenado para Listar Servicios Locales Desactivados
create procedure prc_Servicios_Locales_Listar_Desactivados
as
begin
	SELECT dbo.tbl_Servicios.id_Servicio AS id, dbo.tbl_Servicios.servicio, dbo.tbl_Tipo_Servicios.tipo_Servicio AS tipo, dbo.tbl_Servicios.estado_Servicio AS estado
	FROM     dbo.tbl_Tipo_Servicios INNER JOIN
                  dbo.tbl_Servicios ON dbo.tbl_Tipo_Servicios.id_Tipo_Servicio = dbo.tbl_Servicios.id_Tipo_Servicio
	where estado_Servicio=0 and dbo.tbl_Servicios.id_Tipo_Servicio=1
	order by id_Servicio
end

--Creación Procedimiento Almacenado para Cambiar el estado de un  Servicio Local
create procedure prc_Servicio_Put_Estado
@id int,
@est bit
as
begin
UPDATE [dbo].[tbl_Servicios]
   SET [estado_Servicio] = @est
 WHERE [id_Servicio]=@id
end

--Creación Procedimiento Almacenado para Listar Servicios Basicos
create procedure prc_Servicios_Basicos_Listar
as
begin
	SELECT dbo.tbl_Servicios.id_Servicio AS id, dbo.tbl_Servicios.servicio, dbo.tbl_Tipo_Servicios.tipo_Servicio AS tipo, dbo.tbl_Servicios.estado_Servicio AS estado
	FROM     dbo.tbl_Tipo_Servicios INNER JOIN
                  dbo.tbl_Servicios ON dbo.tbl_Tipo_Servicios.id_Tipo_Servicio = dbo.tbl_Servicios.id_Tipo_Servicio
	where estado_Servicio=1 and dbo.tbl_Servicios.id_Tipo_Servicio=2
	order by id_Servicio
end
--Creación Procedimiento Almacenado para Listar Servicios Basicos Desactivados
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
--Creacion de Procedimientos Almacenados para el Modulo de Autentificación Login
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
--Procedimiento Almacenado para editar el nombre de un Cargo
create procedure prc_Cargos_Editar
@id int,
@cargo nvarchar(30)
as begin
UPDATE [dbo].[tbl_Cargos]
   SET [descripcion_Cargo] = @cargo
 WHERE id_Cargo=@id
end
--Procedimiento Almacenado para editar el Estado de un Cargo
create procedure prc_Cargos_Estado_Editar
@id int,
@estado bit
as begin
UPDATE [dbo].[tbl_Cargos]
   SET [estado_Cargo] = @estado
 WHERE id_Cargo=@id
end
--Procedimiento Almacenado para Verificar la Existencia de un Cargo
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
 ,@mesa int
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
           ,[id_Usuario]
		   ,[id_Mesa])
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
			@user,
			@mesa)
end
--Procedimiento almacenado para insertar tipo de organizacion

--Procedimiento almacenado para insertar una Geo Ubicación
Create procedure prc_Geo_Ubicacion_Crear
@id int,
@lon nvarchar(100),
@lat nvarchar(100)
as begin
	INSERT INTO [dbo].[tbl_Detalle_Geo_Ubicaciones]
           ([id_Encuesta]
           ,[longitud]
           ,[latitud])
     VALUES
           (@id,@lon,@lat)
end
--Procedimiento almacenado para crear un miembro de la junta directiva
Create Procedure prc_Junta_Crear
@id int, @cargo int, @eje int, @dni nvarchar(20),@name nvarchar(100),
@tel nvarchar(20),@sexo nvarchar(20), @edad int, @esc int
as begin
INSERT INTO [dbo].[tbl_Detalle_Junta_Directiva]
           ([id_Encuesta]
           ,[id_Cargo]
           ,[id_Eje]
           ,[dni_Cargo]
           ,[nombre_Junta]
           ,[telefono_Junta]
           ,[sexo]
           ,[edad]
           ,[id_Escolaridad])
     VALUES
           (@id, @cargo, @eje, @dni, @name, @tel, @sexo, @edad, @esc)
end
--Procedimiento almacenado para crear detalle de servicio basico
create procedure prc_Detalle_Serv_Basicos_Crear
@id int, @idServ int
as begin
INSERT INTO [dbo].[tbl_Detalle_Servicios_Basicos]
           ([id_Encuesta]
           ,[id_Servicio])
     VALUES
           (@id,@idServ)
end
--Procedimiento almacenado para crear detalle de servicio local
create procedure prc_Detalle_Serv_Locales_Crear
@id int, @idServ int
as begin
INSERT INTO [dbo].[tbl_Detalle_Servicios_Locales]
           ([id_Encuesta]
           ,[id_Servicio])
     VALUES
           (@id,@idServ)
end
--Proceso almacenado para crear detalle de organizaciones
create procedure prc_Detalle_Org_Crear
@id int, @idOrg int
as begin
INSERT INTO [dbo].[tbl_Detalle_Organizaciones]
           ([id_Encuesta]
           ,[id_Organizacion])
     VALUES
           (@id,@idOrg)
end
--Creacion de procedimiento almacenado para crear una importacion
create procedure prc_Importacion_Crear
@id int, @importacion nvarchar(150)
as begin
INSERT INTO [dbo].[tbl_Detalle_Importaciones]
           ([id_Encuesta]
           ,[descripcion_Importacion])
     VALUES
           (@id,@importacion)
end
--Creacion de procedimiento almacenado para crear una exportacion
create procedure prc_Exportacion_Crear
@id int, @exportacion nvarchar(150)
as begin
INSERT INTO [dbo].[tbl_Detalle_Exportaciones]
           ([id_Encuesta]
           ,[descripcion_Exportacion])
     VALUES
           (@id,@exportacion)
end
--Creacion de procedimiento almacenado para crear un Detalle de uso de la tierra
create procedure prc_Uso_Tierra_Crear
@id int, @idUso int
as begin
INSERT INTO [dbo].[tbl_Detalle_Usos_Tierra]
           ([id_Encuesta]
           ,[id_Uso_Tierra])
     VALUES
           (@id,@idUso)
end
--Creacion de procedimiento almacenado para el detalle del financiamiento
create procedure prc_Detalle_Financiamiento_Crear
@id int, @idTipo int, @idFuente int,@marco nvarchar(250)
as begin
INSERT INTO [dbo].[tbl_Detalle_Financiamientos]
           ([id_Encuesta]
           ,[id_Tipo_Financiamiento]
           ,[id_Fuente_Financiamiento]
           ,[marco_Legal])
     VALUES
           (@id,@idTipo,@idFuente,@marco)
end
---Creacion de procedimiento almacenado para insertar un requerimiento
create procedure prc_Requerimiento_Crear
@id int, @idEstructura int, @idEstado int,@observacion nvarchar(250)
as begin
INSERT INTO [dbo].[tbl_Detalle_Requerimientos]
           ([id_Encuesta]
           ,[id_Estructura]
           ,[id_Estado]
           ,[observacion_Requerimiento])
     VALUES
           (@id,@idEstructura,@idEstado,@observacion)
end
--Crear Usuario Administrador
create procedure prc_Crear_Admin
 @pass nvarchar(60)
 as begin
 INSERT INTO [dbo].[tbl_Usuarios]
           ([nombre_Usuario]
           ,[telefono_Usuario]
           ,[dni_Usuario]
           ,[correo_Usuario]
           ,[contrasenia_Usuario]
           ,[create_At]
           ,[id_Estado_Usuario]
           ,[id_Tipo_Usuario]
           ,[sexo])
     VALUES
           ('Adminitrador'
           ,'00000000'
           ,'0000000000000'
           ,'encuestas.mesassolidarias@redsolidaria.gob.hn'
           ,@pass,
           GETDATE()
           ,1
           ,2
           ,'Hombre/Mujer')
 end

--Creacion de procedimiento almacenado para listar la junta directiva
create procedure prc_Junta_Listar_ID
@id int as begin
SELECT dbo.tbl_Detalle_Junta_Directiva.id_Miembro_Junta AS id, dbo.tbl_Detalle_Junta_Directiva.nombre_Junta AS name, dbo.tbl_Detalle_Junta_Directiva.dni_Cargo AS dni, dbo.tbl_Detalle_Junta_Directiva.telefono_Junta AS tel, 
                  dbo.tbl_Detalle_Junta_Directiva.sexo, dbo.tbl_Detalle_Junta_Directiva.edad, dbo.tbl_Cargos.descripcion_Cargo AS cargo, dbo.tbl_Grado_Escolaridad.grado_Escolaridad AS grado, dbo.tbl_Ejes.descripcion_Eje AS eje
FROM     dbo.tbl_Detalle_Junta_Directiva INNER JOIN
                  dbo.tbl_Cargos ON dbo.tbl_Detalle_Junta_Directiva.id_Cargo = dbo.tbl_Cargos.id_Cargo INNER JOIN
                  dbo.tbl_Ejes ON dbo.tbl_Detalle_Junta_Directiva.id_Eje = dbo.tbl_Ejes.id_Eje INNER JOIN
                  dbo.tbl_Grado_Escolaridad ON dbo.tbl_Detalle_Junta_Directiva.id_Escolaridad = dbo.tbl_Grado_Escolaridad.id_Escolaridad
where id_Encuesta=@id
order by dbo.tbl_Detalle_Junta_Directiva.id_Cargo
end
----------------------------------------------------------------------------------------------------------------------------------------------
--Procedimiento almacenado para crear un tipo de organización
create procedure prc_Tipo_Org_Crear
@tipo nvarchar(30),@estado bit
as begin
INSERT INTO [dbo].[tbl_Tipos_Organizacion]
           ([tipo_Organizacion]
           ,[estado_Tipo_Organizacion])
     VALUES
           (@tipo,@estado)
end
--Procedimiento almacenado para buscar un tipo de organización por ID
create procedure prc_Tipo_Org_Buscar_Nombre
@tipo nvarchar(30)
as begin
	SELECT id_Tipo_Organizacion AS id, tipo_Organizacion AS tipo, estado_Tipo_Organizacion AS estado
	FROM     dbo.tbl_Tipos_Organizacion
	Where tipo_Organizacion=@tipo
end
--Procedimiento Almacenado para buscar un tipo de organización por nombre
create procedure prc_Tipo_Org_Buscar
@id int
as begin
	SELECT id_Tipo_Organizacion AS id, tipo_Organizacion AS tipo, estado_Tipo_Organizacion AS estado
	FROM     dbo.tbl_Tipos_Organizacion
	Where id_Tipo_Organizacion=@id
end
--Procedimiento Almacenado para editar un tipo de organización
Create Procedure prc_Tipo_Org_Editar
@id int, @tipo nvarchar(30)
as begin
	UPDATE [dbo].[tbl_Tipos_Organizacion]
	   SET [tipo_Organizacion] = @tipo
	 WHERE  id_Tipo_Organizacion=@id
end
--Procedimiento Almacenado para editar el estado de un tipo de organización
Create Procedure prc_Tipo_Org_Editar_Estado
@id int, @estado bit
as begin
	UPDATE [dbo].[tbl_Tipos_Organizacion]
	Set	  [estado_Tipo_Organizacion] = @estado
	WHERE  id_Tipo_Organizacion=@id
end
----------------------------------------------------------------------------------------------------------------------------------------------
--Proceso almacenado para agregar una organizacion
create procedure prc_Organizaciones_Crear
@tipo int,
@social bit,
@org nvarchar(70),
@estado bit
as begin
INSERT INTO [dbo].[tbl_Organizaciones]
           ([id_Tipo_Organizacion]
           ,[social_productiva]
           ,[descripcion_Organizacion]
           ,[estado_Organizacion])
     VALUES
           (@tipo,@social,@org,@estado)
end
--Proceso almacenado para buscar una organizacion por ID
create procedure prc_Organizaciones_Buscar
@id int
as begin
	SELECT dbo.tbl_Organizaciones.id_Organizacion AS id, dbo.tbl_Organizaciones.descripcion_Organizacion AS org, dbo.tbl_Tipos_Organizacion.tipo_Organizacion AS tipo, dbo.tbl_Organizaciones.social_productiva AS social, 
					  dbo.tbl_Organizaciones.estado_Organizacion AS estado
	FROM     dbo.tbl_Organizaciones INNER JOIN
					  dbo.tbl_Tipos_Organizacion ON dbo.tbl_Organizaciones.id_Tipo_Organizacion = dbo.tbl_Tipos_Organizacion.id_Tipo_Organizacion
	Where dbo.tbl_Organizaciones.id_Organizacion=@id
end
--Proceso almacenado para buscar una organización por nombre
create procedure prc_Organizaciones_Buscar_Org
@org nvarchar(70)
as begin
	SELECT dbo.tbl_Organizaciones.id_Organizacion AS id, dbo.tbl_Organizaciones.descripcion_Organizacion AS org, dbo.tbl_Tipos_Organizacion.tipo_Organizacion AS tipo, dbo.tbl_Organizaciones.social_productiva AS social, 
					  dbo.tbl_Organizaciones.estado_Organizacion AS estado
	FROM     dbo.tbl_Organizaciones INNER JOIN
					  dbo.tbl_Tipos_Organizacion ON dbo.tbl_Organizaciones.id_Tipo_Organizacion = dbo.tbl_Tipos_Organizacion.id_Tipo_Organizacion
	Where dbo.tbl_Organizaciones.descripcion_Organizacion=@org
end
--Procedimiento Almacenado para editar una organizacion
create procedure prc_Organizaciones_Editar
@id int, @org nvarchar(70)
as begin
	UPDATE [dbo].[tbl_Organizaciones]
	Set	   [descripcion_Organizacion] = @org
	WHERE dbo.tbl_Organizaciones.id_Organizacion=@id
end
--Procedimiento Almacenado para editar los datos de una organizacion
create procedure prc_Organizaciones_Editar_Datos
@id int,@tipo bit,@social bit
as begin
	UPDATE [dbo].[tbl_Organizaciones]
	   SET [id_Tipo_Organizacion] = @tipo
		  ,[social_productiva] = @social
	 WHERE dbo.tbl_Organizaciones.id_Organizacion=@id
end
--Procedimiento Almacenado para cambiar el estado de una organizacion
create procedure prc_Organizaciones_Editar_Estado
@id int,@estado bit
as begin
	UPDATE [dbo].[tbl_Organizaciones]
	   SET [estado_Organizacion] = @estado
	 WHERE dbo.tbl_Organizaciones.id_Organizacion=@id
end





--Procedimiento almacenado para crear una Mesa Solidaria
Create Procedure prc_Mesa_Crear
@id nvarchar(10) as begin
	INSERT INTO [dbo].[tbl_Mesas_Solidarias]
           ([id_Caserio]
           ,[fecha_creacion])
	output inserted.id_Mesa as id
     VALUES
           (@id,getdate())
end
--Procedimiento Almacenado para crear una Junta de la Mesa Solidaria
Create Procedure prc_Mesa_Junta_Crear
@id int, @cargo int, @eje int, @dni nvarchar(20),@name nvarchar(100),
@tel nvarchar(20),@sexo nvarchar(20), @edad int, @esc int
as begin
INSERT INTO [dbo].[tbl_Junta_Mesa]
           ([id_Mesa]
           ,[nombre_Junta]
           ,[dni_Cargo]
           ,[telefono_Junta]
           ,[sexo]
           ,[edad]
           ,[id_Cargo]
           ,[id_Eje]
           ,[id_Escolaridad])
     VALUES
           (@id,@name,@dni, @tel, @sexo, @edad, @cargo, @eje, @esc)
end
--Procedimiento almacenado para obtener una mesa por el ID del caserio
create procedure prc_Mesa_Buscar
@id nvarchar(10)
as begin
	SELECT dbo.tbl_Mesas_Solidarias.id_Mesa AS id, dbo.tbl_Mesas_Solidarias.id_Caserio AS id_cas, dbo.tbl_Caserios.caserio
	FROM     dbo.tbl_Mesas_Solidarias INNER JOIN
                  dbo.tbl_Caserios ON dbo.tbl_Mesas_Solidarias.id_Caserio = dbo.tbl_Caserios.id_Caserio
	where dbo.tbl_Mesas_Solidarias.id_Caserio=@id
end

-----------------------------------------------------------------------------------------------------------------------------------
--Creación de Proceso Alamacenado para crear los Servicios
Create Procedure prc_Servicios_Crear
@tipo int, @servicio nvarchar(150),@estado bit
as begin
INSERT INTO [dbo].[tbl_Servicios]
           ([id_Tipo_Servicio]
           ,[servicio]
           ,[estado_Servicio])
     VALUES
           (@tipo,@servicio,@estado)
end

Create Procedure prc_Servicios_Buscar
@id int
as begin
	SELECT dbo.tbl_Servicios.id_Servicio AS id, dbo.tbl_Servicios.id_Tipo_Servicio AS id_tipo, dbo.tbl_Tipo_Servicios.tipo_Servicio AS tipo, dbo.tbl_Servicios.servicio, dbo.tbl_Servicios.estado_Servicio AS estado
	FROM     dbo.tbl_Servicios INNER JOIN
             dbo.tbl_Tipo_Servicios ON dbo.tbl_Servicios.id_Tipo_Servicio = dbo.tbl_Tipo_Servicios.id_Tipo_Servicio
	where dbo.tbl_Servicios.id_Servicio=@id
end

Create Procedure prc_Servicios_Buscar_Nombre
@servicio nvarchar(150),@tipo int
as begin
	SELECT dbo.tbl_Servicios.id_Servicio AS id, dbo.tbl_Servicios.id_Tipo_Servicio AS id_tipo, dbo.tbl_Tipo_Servicios.tipo_Servicio AS tipo, dbo.tbl_Servicios.servicio, dbo.tbl_Servicios.estado_Servicio AS estado
	FROM     dbo.tbl_Servicios INNER JOIN
             dbo.tbl_Tipo_Servicios ON dbo.tbl_Servicios.id_Tipo_Servicio = dbo.tbl_Tipo_Servicios.id_Tipo_Servicio
	where dbo.tbl_Servicios.servicio=@servicio and  dbo.tbl_Servicios.id_Tipo_Servicio=@tipo
end

Create Procedure prc_Servicios_Editar
@id int, @servicio nvarchar(150)
as begin
UPDATE [dbo].[tbl_Servicios]
   SET [servicio] = @servicio
 WHERE id_Servicio=@id
end

Create Procedure prc_Servicios_Editar_Tipo
@id int, @tipo int
as begin
UPDATE [dbo].[tbl_Servicios]
   SET [id_Tipo_Servicio] = @tipo
 WHERE id_Servicio=@id
end

Create Procedure prc_Servicios_Editar_Estado
@id int, @estado bit
as begin
UPDATE [dbo].[tbl_Servicios]
   SET [estado_Servicio] = @estado
 WHERE id_Servicio=@id
end
--Creacion Procedimientos almacenados para los recursos naturales
--Creacion Procedimientos almacenados para los Bosques
Create Procedure prc_Bosques_Crear
@tipo nvarchar(30), @estado bit
as begin
INSERT INTO [dbo].[tbl_Tipos_Bosque]
           ([tipo_Bosque]
           ,[estado_Tipo_Bosque])
     VALUES
           (@tipo,@estado)
end

Create Procedure prc_Bosques_Buscar
@id int
as begin
	SELECT id_Tipo_Bosque AS id, tipo_Bosque AS tipo, estado_Tipo_Bosque AS estado
	FROM     dbo.tbl_Tipos_Bosque
	where id_Tipo_Bosque=@id
end

Create Procedure prc_Bosques_Buscar_Nombre
@tipo nvarchar(30)
as begin
	SELECT id_Tipo_Bosque AS id, tipo_Bosque AS tipo, estado_Tipo_Bosque AS estado
	FROM     dbo.tbl_Tipos_Bosque
	where tipo_Bosque=@tipo
end

Create Procedure prc_Bosques_Editar
@id int,@tipo nvarchar(30)
as begin
UPDATE [dbo].[tbl_Tipos_Bosque]
   SET [tipo_Bosque] = @tipo
 WHERE id_Tipo_Bosque=@id
end

Create Procedure prc_Bosques_Estado
@id int,@estado bit
as begin
UPDATE [dbo].[tbl_Tipos_Bosque]
   SET [estado_Tipo_Bosque] = @estado
 WHERE id_Tipo_Bosque=@id
end
--Creacion Procedimientos almacenados para los Suelos
Create Procedure prc_Suelos_Crear
@suelo nvarchar(30), @estado bit
as begin
INSERT INTO [dbo].[tbl_Suelos]
           ([descripcion_Suelo]
           ,[estado_Suelo])
     VALUES
           (@suelo,@estado)
end

Create Procedure prc_Suelos_Buscar
@id int
as begin
	SELECT id_Suelo AS id, descripcion_Suelo AS suelo, estado_Suelo AS estado
	FROM     dbo.tbl_Suelos
	where id_Suelo=@id
end

Create Procedure prc_Suelos_Buscar_Nombre
@suelo nvarchar(30)
as begin
	SELECT id_Suelo AS id, descripcion_Suelo AS suelo, estado_Suelo AS estado
	FROM     dbo.tbl_Suelos
	where descripcion_Suelo=@suelo
end

Create Procedure prc_Suelos_Editar
@id int,@suelo nvarchar(30)
as begin
UPDATE [dbo].[tbl_Suelos]
   SET [descripcion_Suelo] = @suelo
 WHERE [id_Suelo]=@id
end

Create Procedure prc_Suelos_Estado
@id int,@estado bit
as begin
UPDATE [dbo].[tbl_Suelos]
   SET [estado_Suelo] = @estado
 WHERE [id_Suelo]=@id
end
--Creacion Procedimientos almacenados para los financiamientos
--Creacion Procedimientos almacenados para los tipos
Create Procedure prc_Tipo_Financiamiento_Crear
@tipo nvarchar(30), @estado bit
as begin
INSERT INTO [dbo].[tbl_Tipos_Financiamiento]
           ([financiamiento]
           ,[estado_Tipo_Financiamiento])
     VALUES
           (@tipo,@estado)
end

Create Procedure prc_Tipo_Financiamiento_Buscar
@id int
as begin
	SELECT id_Tipo_Financiamiento AS id, financiamiento AS tipo, estado_Tipo_Financiamiento AS estado
	FROM     dbo.tbl_Tipos_Financiamiento
	where id_Tipo_Financiamiento=@id
end

Create Procedure prc_Tipo_Financiamiento_Buscar_Nombre
@tipo nvarchar(30)
as begin
	SELECT id_Tipo_Financiamiento AS id, financiamiento AS tipo, estado_Tipo_Financiamiento AS estado
	FROM     dbo.tbl_Tipos_Financiamiento
	where financiamiento=@tipo
end

Create Procedure prc_Tipo_Financiamiento_Editar
@id int,@tipo nvarchar(30)
as begin
UPDATE [dbo].[tbl_Tipos_Financiamiento]
   SET [financiamiento] = @tipo
 WHERE [id_Tipo_Financiamiento]=@id
end

Create Procedure prc_Tipo_Financiamiento_Editar_Estado
@id int,@estado bit
as begin
UPDATE [dbo].[tbl_Tipos_Financiamiento]
   SET [estado_Tipo_Financiamiento] = @estado
 WHERE [id_Tipo_Financiamiento]=@id
end

--Creacion Procedimientos almacenados para las fuentes
Create Procedure prc_Fuente_Financiamiento_Crear
@fuente nvarchar(50), @estado bit
as begin
INSERT INTO [dbo].[tbl_Fuentes_Financiamiento]
           ([fuente_Financiamiento]
           ,[estado_Fuente_Financiamiento])
     VALUES
           (@fuente,@estado)
end

Create Procedure prc_Fuente_Financiamiento_Buscar
@id int
as begin
	SELECT id_Fuente_Financiamiento AS id, fuente_Financiamiento AS fuente, estado_Fuente_Financiamiento AS estado
	FROM     dbo.tbl_Fuentes_Financiamiento
	where id_Fuente_Financiamiento=@id
end

Create Procedure prc_Fuente_Financiamiento_Buscar_Nombre
@fuente nvarchar(50), @estado bit
as begin
	SELECT id_Fuente_Financiamiento AS id, fuente_Financiamiento AS fuente, estado_Fuente_Financiamiento AS estado
	FROM     dbo.tbl_Fuentes_Financiamiento
	where fuente_Financiamiento=@fuente
end

Create Procedure prc_Fuente_Financiamiento_Editar
@id int,@fuente nvarchar(50)
as begin
UPDATE [dbo].[tbl_Fuentes_Financiamiento]
   SET [fuente_Financiamiento] = @fuente
 WHERE [id_Fuente_Financiamiento]=@id
end

Create Procedure prc_Fuente_Financiamiento_Editar_Estado
@id int,@estado bit
as begin
UPDATE [dbo].[tbl_Fuentes_Financiamiento]
      Set [estado_Fuente_Financiamiento] = @estado
 WHERE [id_Fuente_Financiamiento]=@id
end
--Creacion Procedimientos almacenados para los Requerimientos
--Creacion Procedimientos almacenados para los mercados
Create Procedure prc_Mercados_Crear
@mercado nvarchar(30), @estado bit
as begin
INSERT INTO [dbo].[tbl_Mercados]
           ([descripcion_Mercado]
           ,[estado_Mercado])
     VALUES
           (@mercado,@estado)
end

Create Procedure prc_Mercados_Buscar
@id int
as begin
	SELECT id_Mercado AS id, descripcion_Mercado AS mercado, estado_Mercado AS estado
	FROM     dbo.tbl_Mercados
	where id_Mercado=@id
end

Create Procedure prc_Mercados_Buscar_Nombre
@mercado nvarchar(30)
as begin
	SELECT id_Mercado AS id, descripcion_Mercado AS mercado, estado_Mercado AS estado
	FROM     dbo.tbl_Mercados
	where descripcion_Mercado=@mercado
end

Create Procedure prc_Mercados_Editar
@id int,@mercado nvarchar(30)
as begin
UPDATE [dbo].[tbl_Mercados]
   SET [descripcion_Mercado] = @mercado
 WHERE [id_Mercado]=@id
end

Create Procedure prc_Mercados_Editar_Estado
@id int,@estado bit
as begin
UPDATE [dbo].[tbl_Mercados]
   SET [estado_Mercado] = @estado
 WHERE [id_Mercado]=@id
end
--Creacion Procedimientos almacenados para los usos
Create Procedure prc_Usos_Tierra_Crear
@uso nvarchar(50), @estado bit
as begin
INSERT INTO [dbo].[tbl_Usos_Tierra]
           ([uso_Tierra]
           ,[estado_Uso_Tierra])
     VALUES
           (@uso,@estado)
end

Create Procedure prc_Usos_Tierra_Buscar
@id int
as begin
	SELECT id_Uso_Tierra AS id, uso_Tierra AS uso, estado_Uso_Tierra AS estado
	FROM     dbo.tbl_Usos_Tierra
	where id_Uso_Tierra=@id
end

Create Procedure prc_Usos_Tierra_Buscar_Nombre
@uso nvarchar(50)
as begin
	SELECT id_Uso_Tierra AS id, uso_Tierra AS uso, estado_Uso_Tierra AS estado
	FROM     dbo.tbl_Usos_Tierra
	where uso_Tierra=@uso
end

Create Procedure prc_Usos_Tierra_Editar
@id int,@uso nvarchar(50)
as begin
UPDATE [dbo].[tbl_Usos_Tierra]
   SET [uso_Tierra] = @uso
 WHERE [id_Uso_Tierra]=@id
end

Create Procedure prc_Usos_Tierra_Editar_Estado
@id int,@estado bit
as begin
UPDATE [dbo].[tbl_Usos_Tierra]
   SET [estado_Uso_Tierra] = @estado
 WHERE [id_Uso_Tierra]=@id
end
--Creacion Procedimientos almacenados para los estructuras
Create Procedure prc_Estructuras_Crear
@estructura nvarchar(150), @estado bit
as begin
INSERT INTO [dbo].[tbl_Estructuras]
           ([estructura]
           ,[estado_Estructura])
     VALUES
           (@estructura,@estado)
end

Create Procedure prc_Estructuras_Buscar
@id int
as begin
	SELECT id_Estructura AS id, estructura, estado_Estructura AS estado
	FROM     dbo.tbl_Estructuras
	where id_Estructura=@id
end

Create Procedure prc_Estructuras_Buscar_Nombre
@estructura nvarchar(150)
as begin
	SELECT id_Estructura AS id, estructura, estado_Estructura AS estado
	FROM     dbo.tbl_Estructuras
	where estructura=@estructura
end

Create Procedure prc_Estructuras_Editar
@id int,@estructura nvarchar(150)
as begin
UPDATE [dbo].[tbl_Estructuras]
   SET [estructura] = @estructura
 WHERE [id_Estructura]=@id
end

Create Procedure prc_Estructuras_Editar_Estado
@id int,@estado bit
as begin
UPDATE [dbo].[tbl_Estructuras]
   SET [estado_Estructura] = @estado
 WHERE [id_Estructura]=@id
end
--Creacion Procedimientos almacenados para los tenencias
Create Procedure prc_Tenencia_Tierra_Crear
@tenencia nvarchar(30), @estado bit
as begin
INSERT INTO [dbo].[tbl_Tenencia_Tierra]
           ([descripcion_Tenencia]
           ,[estado_Tenencia_Tierra])
     VALUES
           (@tenencia,@estado)
end

Create Procedure prc_Tenencia_Tierra_Buscar
@id int
as begin
	SELECT id_Tenencia AS id, descripcion_Tenencia AS tenencia, estado_Tenencia_Tierra AS estado
	FROM     dbo.tbl_Tenencia_Tierra
	where id_Tenencia=@id
end

Create Procedure prc_Tenencia_Tierra_Buscar_Nombre
@tenencia nvarchar(30)
as begin
	SELECT id_Tenencia AS id, descripcion_Tenencia AS tenencia, estado_Tenencia_Tierra AS estado
	FROM     dbo.tbl_Tenencia_Tierra
	where descripcion_Tenencia=@tenencia
end

Create Procedure prc_Tenencia_Tierra_Editar
@id int,@tenencia nvarchar(30)
as begin
UPDATE [dbo].[tbl_Tenencia_Tierra]
   SET [descripcion_Tenencia] = @tenencia
 WHERE [id_Tenencia]=@id
end

Create Procedure prc_Tenencia_Tierra_Editar_Estado
@id int,@estado bit
as begin
UPDATE [dbo].[tbl_Tenencia_Tierra]
   SET [estado_Tenencia_Tierra] = @estado	
 WHERE [id_Tenencia]=@id
end
---------------------------------------------------------------------------------------------------------------------------------------------------------
--Proceso almacenado para crear una nueva referencia
Create procedure prc_Referencia_Crear
@uid nvarchar(40),
@name nvarchar(255),
@ext nvarchar(20),
@tipo int,
@id int
as begin
	INSERT INTO [dbo].[tbl_Referencias]
           ([uid_Referencia]
           ,[nombre_Archivo]
           ,[extension]
           ,[id_Tipo_Archivo]
           ,[id_Encuesta])
	output inserted.id_Referencia
	VALUES
           (@uid,@name,@ext,@tipo,@id)

end
--Creacion de procedimiento almacenado para crear la referencia de la junta directiva
create procedure prc_Referencia_Junta_Crear
@id_Ref int,
@miembro int,
@uid nvarchar(40)
as begin
INSERT INTO [dbo].[tbl_Referencias_Junta]
           ([id_Referencia]
           ,[id_Miembro_Junta]
           ,[uid_Referencia])
     VALUES
           (@id_Ref,@miembro,@uid)	
end


--Reiniciar id en 1
--DBCC CHECKIDENT ( [tbl_Encuestas], RESEED, 0);
