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
--Creación Vista Listar Organizaciones
CREATE VIEW [dbo].[vew_Organizaciones_Listar]
as
	SELECT dbo.tbl_Organizaciones.id_Organizacion AS id, dbo.tbl_Organizaciones.descripcion_Organizacion AS org, dbo.tbl_Tipos_Organizacion.tipo_Organizacion AS tipo, dbo.tbl_Organizaciones.estado_Organizacion AS estado
	FROM     dbo.tbl_Organizaciones INNER JOIN
                  dbo.tbl_Tipos_Organizacion ON dbo.tbl_Organizaciones.id_Tipo_Organizacion = dbo.tbl_Tipos_Organizacion.id_Tipo_Organizacion
	where estado_Organizacion=1
go
--Creación Vista Listar Organizaciones Desactivadas
CREATE VIEW [dbo].[vew_Organizaciones_Listar_Desactivados]
as
	SELECT dbo.tbl_Organizaciones.id_Organizacion AS id, dbo.tbl_Organizaciones.descripcion_Organizacion AS org, dbo.tbl_Tipos_Organizacion.tipo_Organizacion AS tipo, dbo.tbl_Organizaciones.estado_Organizacion AS estado
	FROM     dbo.tbl_Organizaciones INNER JOIN
                  dbo.tbl_Tipos_Organizacion ON dbo.tbl_Organizaciones.id_Tipo_Organizacion = dbo.tbl_Tipos_Organizacion.id_Tipo_Organizacion
	where estado_Organizacion=0
go
--------------------------------------------------------------------------------------------------------------------------------------
--Creacion Vistas Recursos Naturales
--Creacion Vista Listar Tipos de Bosques
CREATE VIEW [dbo].[vew_Bosques_Listar]
as
	SELECT id_Tipo_Bosque AS id, tipo_Bosque AS tipo, estado_Tipo_Bosque AS estado
	FROM     dbo.tbl_Tipos_Bosque
	where estado_Tipo_Bosque=1
go
--Creacion Vista Listar Tipos de Bosques Desactivados

CREATE VIEW [dbo].[vew_Bosques_Listar_Desactivados]
as
	SELECT id_Tipo_Bosque AS id, tipo_Bosque AS tipo, estado_Tipo_Bosque AS estado
	FROM     dbo.tbl_Tipos_Bosque
	where estado_Tipo_Bosque=0
go
--Creacion Vista Listar Tipos de Suelos
CREATE VIEW [dbo].[vew_Suelos_Listar]
as
	SELECT id_Suelo AS id, descripcion_Suelo AS tipo, estado_Suelo AS estado
	FROM     dbo.tbl_Suelos
	where estado_Suelo=1
go
--Creacion Vista Listar Tipos de Rios Desactivados

CREATE VIEW [dbo].[vew_Suelos_Listar_Desactivados]
as
	SELECT id_Suelo AS id, descripcion_Suelo AS tipo, estado_Suelo AS estado
	FROM     dbo.tbl_Suelos
	where estado_Suelo=0
go