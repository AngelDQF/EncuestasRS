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
	SELECT dbo.tbl_Organizaciones.id_Organizacion AS id, dbo.tbl_Organizaciones.descripcion_Organizacion AS org, dbo.tbl_Tipos_Organizacion.tipo_Organizacion AS tipo,dbo.tbl_Organizaciones.social_Productiva AS social, dbo.tbl_Organizaciones.estado_Organizacion AS estado
	FROM     dbo.tbl_Organizaciones INNER JOIN
                  dbo.tbl_Tipos_Organizacion ON dbo.tbl_Organizaciones.id_Tipo_Organizacion = dbo.tbl_Tipos_Organizacion.id_Tipo_Organizacion
	where estado_Organizacion=1
go
--Creación Vista Listar Organizaciones Desactivadas
CREATE VIEW [dbo].[vew_Organizaciones_Listar_Desactivados]
as
	SELECT dbo.tbl_Organizaciones.id_Organizacion AS id, dbo.tbl_Organizaciones.descripcion_Organizacion AS org, dbo.tbl_Tipos_Organizacion.tipo_Organizacion AS tipo,dbo.tbl_Organizaciones.social_Productiva AS social, dbo.tbl_Organizaciones.estado_Organizacion AS estado
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
--------------------------------------------------------------------------------------------------------------------------------------
--Creacion Vistas Financiamientos
--Creacion Vista Listar Tipos de Financiamientos
CREATE VIEW [dbo].[vew_Financiamientos_Listar_Tipos]
as
	SELECT id_Tipo_Financiamiento AS id, financiamiento AS tipo, estado_Tipo_Financiamiento AS estado
	FROM     dbo.tbl_Tipos_Financiamiento
	where estado_Tipo_Financiamiento=1
go
--Creacion Vista Listar Tipos de Financiamientos
CREATE VIEW [dbo].[vew_Financiamientos_Listar_Tipos_Desactivados]
as
	SELECT id_Tipo_Financiamiento AS id, financiamiento AS tipo, estado_Tipo_Financiamiento AS estado
	FROM     dbo.tbl_Tipos_Financiamiento
	where estado_Tipo_Financiamiento=0
go
--Creacion Vista Listar Fuentes de Financiamientos
CREATE VIEW [dbo].[vew_Financiamientos_Listar_Fuentes]
as
	SELECT id_Fuente_Financiamiento AS id, fuente_Financiamiento AS fuente, estado_Fuente_Financiamiento AS estado
	FROM     dbo.tbl_Fuentes_Financiamiento
	where estado_Fuente_Financiamiento=1
go
--Creacion Vista Listar Fuentes de Financiamientos Desactivadas
CREATE VIEW [dbo].[vew_Financiamientos_Listar_Fuentes_Desactivadas]
as
	SELECT id_Fuente_Financiamiento AS id, fuente_Financiamiento AS fuente, estado_Fuente_Financiamiento AS estado
	FROM     dbo.tbl_Fuentes_Financiamiento
	where estado_Fuente_Financiamiento=0
go
--------------------------------------------------------------------------------------------------------------------------------------
--Creacion Vistas Requerimientos de Inversión
-----------------------------------------------------------------------------------
--Creacion Vistas Mercados
--Creacion Vista Listar Mercados
CREATE VIEW [dbo].[vew_Mercados_Listar]
as
	SELECT id_Mercado AS id, descripcion_Mercado AS mercado, estado_Mercado AS estado
	FROM     dbo.tbl_Mercados
	where estado_Mercado=1
go
--Creacion Vista Listar Mercados Desactivados
CREATE VIEW [dbo].[vew_Mercados_Listar_Desactivados]
as
	SELECT id_Mercado AS id, descripcion_Mercado AS mercado, estado_Mercado AS estado
	FROM     dbo.tbl_Mercados
	where estado_Mercado=0
go
-----------------------------------------------------------------------------------
--Creacion Vistas Usos Tierra
--Creacion Vista Usos Tierra Listar
CREATE VIEW [dbo].[vew_Tierras_Usos_Listar]
as
	SELECT id_Uso_Tierra AS id, uso_Tierra AS uso, estado_Uso_Tierra AS estado
	FROM     dbo.tbl_Usos_Tierra
	where estado_Uso_Tierra=1
go
--Creacion Vista Usos Tierra Listar Desactivados
CREATE VIEW [dbo].[vew_Tierras_Usos_Listar_Desactivados]
as
	SELECT id_Uso_Tierra AS id, uso_Tierra AS uso, estado_Uso_Tierra AS estado
	FROM     dbo.tbl_Usos_Tierra
	where estado_Uso_Tierra=0
go
-----------------------------------------------------------------------------------
--Creacion Vistas Estructuras
--Creacion Vista Estructuras Listar
CREATE VIEW [dbo].[vew_Estructuras_Listar]
as
	SELECT id_Estructura AS id, estructura, estado_Estructura AS estado
	FROM     dbo.tbl_Estructuras
	where estado_Estructura=1
go
--Creacion Vista Estructuras Listar Desactivados
CREATE VIEW [dbo].[vew_Estructuras_Listar_Desactivados]
as
	SELECT id_Estructura AS id, estructura, estado_Estructura AS estado
	FROM     dbo.tbl_Estructuras
	where estado_Estructura=0
go
-----------------------------------------------------------------------------------
--Creacion Vistas Tenencia Tierra
--Creacion Vista Tenencia Tierra Listar
CREATE VIEW [dbo].[vew_Tierras_Tenencia_Listar]
as
	SELECT id_Tenencia AS id, descripcion_Tenencia AS tenencia, estado_Tenencia_Tierra AS estado
	FROM     dbo.tbl_Tenencia_Tierra
	where estado_Tenencia_Tierra=1
go
--Creacion Vista Tenencia Tierra Listar Desactivados
CREATE VIEW [dbo].[vew_Tierras_Tenencia_Listar_Desactivados]
as
	SELECT id_Tenencia AS id, descripcion_Tenencia AS tenencia, estado_Tenencia_Tierra AS estado
	FROM     dbo.tbl_Tenencia_Tierra
	where estado_Tenencia_Tierra=0
go
--------------------------------------------------------------------------------------------------------------------------------------
--Creacion Vistas Ubicaciones
-----------------------------------------------------------------------------------
--Creacion Vista Listar Deparatamentos
CREATE VIEW [dbo].[vew_Departamentos_Listar] 
as
SELECT id_Departamento AS id_dep, departamento AS dep
FROM     dbo.tbl_Departamentos
go
--Creacion Vista Listar Municipios
CREATE VIEW [dbo].[vew_Municipios_Listar] 
as
SELECT dbo.tbl_Departamentos.id_Departamento AS id_dep, dbo.tbl_Departamentos.departamento AS dep, dbo.tbl_Municipios.id_Municipio AS id_mun, dbo.tbl_Municipios.municipio AS mun
FROM     dbo.tbl_Departamentos INNER JOIN
                  dbo.tbl_Municipios ON dbo.tbl_Departamentos.id_Departamento = dbo.tbl_Municipios.id_Departamento
go
--Creacion Vista Listar Aldeas
CREATE VIEW [dbo].[vew_Aldeas_Listar]
as
SELECT dbo.tbl_Departamentos.id_Departamento AS id_dep, dbo.tbl_Departamentos.departamento AS dep, dbo.tbl_Municipios.id_Municipio AS id_mun, dbo.tbl_Municipios.municipio AS mun, dbo.tbl_Aldeas.id_Aldea AS id_aldea, 
                  dbo.tbl_Aldeas.aldea
FROM     dbo.tbl_Departamentos INNER JOIN
                  dbo.tbl_Municipios ON dbo.tbl_Departamentos.id_Departamento = dbo.tbl_Municipios.id_Departamento INNER JOIN
                  dbo.tbl_Aldeas ON dbo.tbl_Municipios.id_Municipio = dbo.tbl_Aldeas.id_Municipio
go
--Creacion Vista Listar Caserios
CREATE VIEW [dbo].[vew_Caserios_Listar]
as
	SELECT dbo.tbl_Departamentos.id_Departamento AS id_dep, dbo.tbl_Departamentos.departamento AS dep, dbo.tbl_Municipios.id_Municipio AS id_mun, dbo.tbl_Municipios.municipio AS mun, dbo.tbl_Aldeas.id_Aldea AS id_aldea, 
					  dbo.tbl_Aldeas.aldea, dbo.tbl_Caserios.id_Caserio AS id_caserio, dbo.tbl_Caserios.caserio
	FROM     dbo.tbl_Departamentos INNER JOIN
					  dbo.tbl_Municipios ON dbo.tbl_Departamentos.id_Departamento = dbo.tbl_Municipios.id_Departamento INNER JOIN
					  dbo.tbl_Aldeas ON dbo.tbl_Municipios.id_Municipio = dbo.tbl_Aldeas.id_Municipio INNER JOIN
					  dbo.tbl_Caserios ON dbo.tbl_Aldeas.id_Aldea = dbo.tbl_Caserios.id_Aldea
go

--------------------------------------------------------------------------------------------------------------------------------------
--Vistas para modulo de Encuestas
--Vista para organizacion que organiza la reunion
CREATE VIEW [dbo].[vew_Encuestas_Organizacion]
as
	SELECT dbo.tbl_Organizaciones.id_Organizacion AS id, dbo.tbl_Organizaciones.descripcion_Organizacion AS org, dbo.tbl_Tipos_Organizacion.tipo_Organizacion AS tipo,dbo.tbl_Organizaciones.social_Productiva AS social, dbo.tbl_Organizaciones.estado_Organizacion AS estado
	FROM     dbo.tbl_Organizaciones INNER JOIN
                  dbo.tbl_Tipos_Organizacion ON dbo.tbl_Organizaciones.id_Tipo_Organizacion = dbo.tbl_Tipos_Organizacion.id_Tipo_Organizacion
	where dbo.tbl_Organizaciones.estado_Organizacion=1 and dbo.tbl_Organizaciones.id_Tipo_Organizacion=2
go
--Vista para organizacion que organizaciones Sociales
CREATE VIEW [dbo].[vew_Encuestas_Organizaciones_Sociales]
as
	SELECT dbo.tbl_Organizaciones.id_Organizacion AS id, dbo.tbl_Organizaciones.descripcion_Organizacion AS org, dbo.tbl_Tipos_Organizacion.tipo_Organizacion AS tipo,dbo.tbl_Organizaciones.social_Productiva AS social, dbo.tbl_Organizaciones.estado_Organizacion AS estado
	FROM     dbo.tbl_Organizaciones INNER JOIN
                  dbo.tbl_Tipos_Organizacion ON dbo.tbl_Organizaciones.id_Tipo_Organizacion = dbo.tbl_Tipos_Organizacion.id_Tipo_Organizacion
	where dbo.tbl_Organizaciones.estado_Organizacion=1 and dbo.tbl_Organizaciones.social_Productiva=1
go