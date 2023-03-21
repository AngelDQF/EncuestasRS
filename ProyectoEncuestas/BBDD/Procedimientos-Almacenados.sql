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
           ,[contrasenia_Usuario]
           ,[create_At]
           ,[update_At]
           ,[id_Estado_Usuario]
           ,[id_Tipo_Usuario]
		   ,[sexo])
     VALUES
           (@nombre,@telefono,@dni,@correo,@contra,GETDATE(),GETDATE(),@estado,@tipo,@sexo)
End
/*Creación Proceso Almacenado para Buscar un Usuario*/
create procedure prc_Usuarios_Buscar_DNI
@dni nvarchar(50)
As
Begin
	SELECT dbo.tbl_Usuarios.id_Usuario AS ID, dbo.tbl_Usuarios.nombre_Usuario AS name, dbo.tbl_Usuarios.telefono_Usuario AS tel, dbo.tbl_Usuarios.dni_Usuario AS dni, dbo.tbl_Usuarios.correo_Usuario AS email, 
                  dbo.tbl_Usuarios.create_At AS creado, dbo.tbl_Usuarios.update_At AS cambio, dbo.tbl_Estados_Usuario.estado_Usuario AS estado, dbo.tbl_Tipos_Usuario.estado_Tipo_Usuario AS tipo, dbo.tbl_Usuarios.sexo
	FROM     dbo.tbl_Usuarios INNER JOIN
                  dbo.tbl_Tipos_Usuario ON dbo.tbl_Usuarios.id_Tipo_Usuario = dbo.tbl_Tipos_Usuario.id_Tipo_Usuario INNER JOIN
                  dbo.tbl_Estados_Usuario ON dbo.tbl_Usuarios.id_Estado_Usuario = dbo.tbl_Estados_Usuario.id_Estado_Usuario
	where dbo.tbl_Usuarios.dni_Usuario LIKE '%'+@dni+'%'
End
--Procedimineto Almacenado para buscar un usuario por su ID
Create Procedure prc_Usuarios_Buscar_ID
	@id int as begin
	SELECT dbo.tbl_Usuarios.id_Usuario AS id, dbo.tbl_Usuarios.nombre_Usuario AS name, dbo.tbl_Usuarios.telefono_Usuario AS tel, dbo.tbl_Usuarios.dni_Usuario AS dni, dbo.tbl_Usuarios.correo_Usuario AS email, 
					  dbo.tbl_Usuarios.contrasenia_Usuario AS password,convert(nvarchar(10),dbo.tbl_Usuarios.create_At,23) AS creacion, convert(nvarchar(10),dbo.tbl_Usuarios.update_At,23) AS cambio, dbo.tbl_Estados_Usuario.estado_Usuario AS estado, dbo.tbl_Tipos_Usuario.descripcion_Tipo AS tipo, 
					  dbo.tbl_Usuarios.sexo
	FROM     dbo.tbl_Estados_Usuario INNER JOIN
					  dbo.tbl_Usuarios ON dbo.tbl_Estados_Usuario.id_Estado_Usuario = dbo.tbl_Usuarios.id_Estado_Usuario INNER JOIN
					  dbo.tbl_Tipos_Usuario ON dbo.tbl_Usuarios.id_Tipo_Usuario = dbo.tbl_Tipos_Usuario.id_Tipo_Usuario
	where dbo.tbl_Usuarios.id_Usuario=@id
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
Create procedure prc_Encuestas_Listar
as
begin
	SELECT dbo.tbl_Encuestas.id_Encuesta AS id, dbo.tbl_Departamentos.departamento, dbo.tbl_Municipios.municipio, dbo.tbl_Aldeas.aldea, dbo.tbl_Caserios.caserio, dbo.tbl_Encuestas.direccion_Sede AS address, dbo.tbl_Encuestas.total_Hombres, 
					  dbo.tbl_Encuestas.total_Mujeres, dbo.tbl_Encuestas.total_Asistencia, dbo.tbl_Organizaciones.descripcion_Organizacion AS org, dbo.tbl_Encuestas.existencia_Rio AS rios, dbo.tbl_Encuestas.cantidad_Rio AS cant_rio, 
					  dbo.tbl_Encuestas.existencia_Bosque AS bosque, dbo.tbl_Tipos_Bosque.tipo_Bosque AS tipo_bosque, dbo.tbl_Suelos.descripcion_Suelo AS suelo, dbo.tbl_Tenencia_Tierra.descripcion_Tenencia AS tenencia, 
					  dbo.tbl_Mercados.descripcion_Mercado AS mercado, dbo.tbl_Tecnologico_General.nivel AS nivel_tec,convert(nvarchar(10),dbo.tbl_Encuestas.fecha_Encuesta,23)  AS fecha, dbo.tbl_Usuarios.nombre_Usuario AS usuario
	FROM     dbo.tbl_Encuestas INNER JOIN
					  dbo.tbl_Aldeas ON dbo.tbl_Encuestas.id_Aldea = dbo.tbl_Aldeas.id_Aldea INNER JOIN
					  dbo.tbl_Departamentos ON dbo.tbl_Encuestas.id_Departamento = dbo.tbl_Departamentos.id_Departamento INNER JOIN
					  dbo.tbl_Mercados ON dbo.tbl_Encuestas.id_Mercado = dbo.tbl_Mercados.id_Mercado INNER JOIN
					  dbo.tbl_Municipios ON dbo.tbl_Encuestas.id_Municipio = dbo.tbl_Municipios.id_Municipio AND dbo.tbl_Aldeas.id_Municipio = dbo.tbl_Municipios.id_Municipio AND 
					  dbo.tbl_Departamentos.id_Departamento = dbo.tbl_Municipios.id_Departamento INNER JOIN
					  dbo.tbl_Caserios ON dbo.tbl_Encuestas.id_Caserio = dbo.tbl_Caserios.id_Caserio AND dbo.tbl_Aldeas.id_Aldea = dbo.tbl_Caserios.id_Aldea INNER JOIN
					  dbo.tbl_Organizaciones ON dbo.tbl_Encuestas.id_Organizacion = dbo.tbl_Organizaciones.id_Organizacion INNER JOIN
					  dbo.tbl_Tipos_Bosque ON dbo.tbl_Encuestas.id_Tipo_Bosque = dbo.tbl_Tipos_Bosque.id_Tipo_Bosque INNER JOIN
					  dbo.tbl_Suelos ON dbo.tbl_Encuestas.id_Suelo = dbo.tbl_Suelos.id_Suelo INNER JOIN
					  dbo.tbl_Tenencia_Tierra ON dbo.tbl_Encuestas.id_Tenencia = dbo.tbl_Tenencia_Tierra.id_Tenencia INNER JOIN
					  dbo.tbl_Tecnologico_General ON dbo.tbl_Encuestas.id_Tecno = dbo.tbl_Tecnologico_General.id_Tecno INNER JOIN
					  dbo.tbl_Usuarios ON dbo.tbl_Encuestas.id_Usuario = dbo.tbl_Usuarios.id_Usuario
	order by dbo.tbl_Encuestas.fecha_Encuesta
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


--Reiniciar id en 1
--DBCC CHECKIDENT ( [tbl_Tipos_Usuario] , RESEED, 0);