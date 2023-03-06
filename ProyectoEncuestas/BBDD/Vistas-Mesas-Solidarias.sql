--Creacion Vista para Listar los Departamentos
CREATE VIEW [dbo].[vew_Departamentos_Listar]
AS
SELECT id_Departamento AS ID, departamento AS Departamento
FROM     dbo.tbl_Departamentos

--Creación Vistas  Usuarios
--Vista para listar todos los usuarios
CREATE VIEW [dbo].[vew_Usuarios_Listar]
AS
SELECT dbo.tbl_Usuarios.id_Usuario AS id, dbo.tbl_Usuarios.nombre_Usuario AS name, dbo.tbl_Usuarios.telefono_Usuario AS tel, dbo.tbl_Usuarios.dni_Usuario AS dni, dbo.tbl_Usuarios.correo_Usuario AS email, 
                  dbo.tbl_Usuarios.contrasenia_Usuario AS password,convert(nvarchar(10),dbo.tbl_Usuarios.create_At,23) AS creacion, convert(nvarchar(10),dbo.tbl_Usuarios.update_At,23) AS cambio, dbo.tbl_Estados_Usuario.estado_Usuario AS estado, dbo.tbl_Tipos_Usuario.descripcion_Tipo AS tipo, 
                  dbo.tbl_Usuarios.sexo
FROM     dbo.tbl_Estados_Usuario INNER JOIN
                  dbo.tbl_Usuarios ON dbo.tbl_Estados_Usuario.id_Estado_Usuario = dbo.tbl_Usuarios.id_Estado_Usuario INNER JOIN
                  dbo.tbl_Tipos_Usuario ON dbo.tbl_Usuarios.id_Tipo_Usuario = dbo.tbl_Tipos_Usuario.id_Tipo_Usuario
where dbo.tbl_Usuarios.id_Estado_Usuario=1
GO
--Listar Usuarios Desactivadoss
CREATE VIEW [dbo].[vew_Usuarios_Listar_Desactivados]
As
SELECT dbo.tbl_Usuarios.id_Usuario AS id, dbo.tbl_Usuarios.nombre_Usuario AS name, dbo.tbl_Usuarios.telefono_Usuario AS tel, dbo.tbl_Usuarios.dni_Usuario AS dni, dbo.tbl_Usuarios.correo_Usuario AS email, 
                  convert(nvarchar(10),dbo.tbl_Usuarios.create_At,23) AS creado, convert(nvarchar(10),dbo.tbl_Usuarios.update_At,23) AS cambio, dbo.tbl_Tipos_Usuario.descripcion_Tipo AS tipo, dbo.tbl_Usuarios.sexo, dbo.tbl_Estados_Usuario.estado_Usuario AS estado
FROM     dbo.tbl_Usuarios INNER JOIN
                  dbo.tbl_Tipos_Usuario ON dbo.tbl_Usuarios.id_Tipo_Usuario = dbo.tbl_Tipos_Usuario.id_Tipo_Usuario INNER JOIN
                  dbo.tbl_Estados_Usuario ON dbo.tbl_Usuarios.id_Estado_Usuario = dbo.tbl_Estados_Usuario.id_Estado_Usuario
where dbo.tbl_Usuarios.id_Estado_Usuario=2
--vista para listar los tipos de usuarios
CREATE VIEW [dbo].[vew_Usuarios_Tipos_Listar]
AS
SELECT id_Tipo_Usuario AS id, descripcion_Tipo AS tipo, estado_Tipo_Usuario AS estado
FROM     dbo.tbl_Tipos_Usuario
where estado_Tipo_Usuario=1
GO
--Vitas Junta Directiva
/*Creacion Vista Listar Cargos*/
CREATE VIEW [dbo].[vew_Cargos_Listar]
as
	SELECT id_Cargo AS id, descripcion_Cargo AS cargo, estado_Cargo AS estado
	FROM     dbo.tbl_Cargos
	where estado_Cargo=1
GO
--Creacion Vesta Listar Cargos Desactivados
CREATE VIEW [dbo].[vew_Cargos_Listar_Desactivados]
as
	SELECT id_Cargo AS id, descripcion_Cargo AS cargo, estado_Cargo AS estado
	FROM     dbo.tbl_Cargos
	where estado_Cargo=0
GO
/*Creación Vista Listar Ejes*/
CREATE VIEW [dbo].[vew_Ejes_Listar]
AS
SELECT id_Eje AS id, descripcion_Eje AS eje, estado_Eje AS estado
FROM    dbo.tbl_Ejes
where estado_Eje=1
/*Creacion vista litar Ejes Desactivados*/
CREATE VIEW [dbo].[vew_Ejes_Listar_Desactivados]
AS
SELECT id_Eje AS id, descripcion_Eje AS eje, estado_Eje AS estado
FROM    dbo.tbl_Ejes
where estado_Eje=0
/*Creacion vista de las Asignaciones de los usuarios*/
CREATE VIEW [dbo].[vew_Asignaciones_Usuario]
AS
SELECT dbo.tbl_Asignacion_Usuario.id_Asignacion AS ID, dbo.tbl_Usuarios.nombre_Usuario AS Usuario, dbo.tbl_Municipios.municipio AS Municipio, dbo.tbl_Asignacion_Usuario.estado_Asignacion AS Estado
FROM     dbo.tbl_Usuarios INNER JOIN
                  dbo.tbl_Asignacion_Usuario ON dbo.tbl_Usuarios.id_Usuario = dbo.tbl_Asignacion_Usuario.id_Usuario INNER JOIN
                  dbo.tbl_Municipios ON dbo.tbl_Asignacion_Usuario.id_Municipio = dbo.tbl_Municipios.id_Municipio
GO
--------------------------------------------------------------------------------------------------------------------------------------
--Creacion Vistas Organizaciones
--Creacion Vista Listar Tipos de Organizaciones
CREATE VIEW [dbo].[vew_Tipos_Organizaciones_Listar]
as
	SELECT id_Tipo_Organizacion AS id, tipo_Organizacion AS tipo, estado_Tipo_Organizacion AS estado
	FROM     dbo.tbl_Tipos_Organizacion
	where estado_Tipo_Organizacion=1
go
--Creacion Vista Listar Tipos de Organizaciones Desactivadas
CREATE VIEW [dbo].[vew_Tipos_Organizaciones_Listar_Desactivados]
as
	SELECT id_Tipo_Organizacion AS id, tipo_Organizacion AS tipo, estado_Tipo_Organizacion AS estado
	FROM     dbo.tbl_Tipos_Organizacion
	where estado_Tipo_Organizacion=0
go