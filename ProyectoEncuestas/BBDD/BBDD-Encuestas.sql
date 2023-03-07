--Script Creación de Base de Datos y Tablas para proyecto Encuestas
--Creación Base de Datos 'Encuestas'
CREATE DATABASE bd_MesasSolidarias;
use bd_MesasSolidarias

--Creacion de las Tablas
--Creación Tabla Departamentos 

CREATE TABLE tbl_Departamentos(
id_Departamento nvarchar(10) primary key,
departamento nvarchar(17) not null,
);
--Creación Tabla Municipios
CREATE TABLE tbl_Municipios(
id_Municipio nvarchar(10) primary key,
id_Departamento nvarchar(10) not null,
municipio nvarchar(50) not null,
Constraint fk_Departamento Foreign key (id_Departamento) 
references tbl_Departamentos(id_Departamento)
);
--Creación Tabla Aldeas
Create table tbl_Aldeas(
id_Aldea nvarchar(10) Primary Key,
id_Municipio nvarchar(10) Not Null,
aldea nvarchar(50) not null,
Constraint fk_Municipios Foreign Key (id_Municipio)
references tbl_Municipios(id_Municipio)
);
--Creación Tabla Caserios
Create Table tbl_Caserios(
id_Caserio nvarchar(10) Primary Key,
id_Aldea nvarchar(10) Not Null,
caserio nvarchar(70) not null,
Constraint fk_Aldea Foreign Key (id_Aldea)
references tbl_Aldeas(id_Aldea)
);
--Creación Tabla Tipos de Bosque
Create Table tbl_Tipos_Bosque(
id_Tipo_Bosque INT Primary Key Identity(1,1),
tipo_Bosque nvarchar(30) not null,
estado_Tipo_Bosque bit not null
);
--Creación Tabla Tipos de Suelo
Create Table tbl_Suelos(
id_Suelo INT Primary Key Identity (1,1),
descripcion_Suelo nvarchar(30) not null,
estado_Suelo bit not null
);
--Creación Tabla Tenencia de la Tierra
Create Table tbl_Tenencia_Tierra(
id_Tenencia INT Primary Key Identity(1,1),
descripcion_Tenencia nvarchar(30) not null,
estado_Tenencia_Tierra bit not null
);
--Creación Tabla Tipos de Organización
Create Table tbl_Tipos_Organizacion(
id_Tipo_Organizacion INT Primary Key Identity(1,1),
tipo_Organizacion nvarchar(30) not null,
estado_Tipo_Organizacion bit not null
);
--Creación Tabla Organizaciones
Create Table tbl_Organizaciones(
id_Organizacion INT Primary Key Identity(1,1),
id_Tipo_Organizacion INT Not Null,
descripcion_Organizacion nvarchar(70) Not Null,
estado_Organizacion bit not null,
Constraint fk_Tipos_Organizacion Foreign Key (id_Tipo_Organizacion)
References tbl_Tipos_Organizacion(id_Tipo_Organizacion)
);
--Creación Tabla Mercados
Create Table tbl_Mercados(
id_Mercado INT Primary Key Identity(1,1),
descripcion_Mercado nvarchar(30) Not Null,
estado_Mercado bit not null
);
--Creación Tabla Estados
Create Table tbl_Estados(
id_Estado INT Primary Key Identity(1,1),
descripcion_Estado nvarchar(30) Not Null
);
--Creación Tabla Ejes
Create Table tbl_Ejes(
id_Eje INT Primary Key Identity(1,1),
descripcion_Eje nvarchar(250) Not Null,
estado_Eje bit not null
);
--Creación Tabla Cargos
Create Table tbl_Cargos(
id_Cargo INT Primary Key Identity(1,1),
descripcion_Cargo nvarchar(30) Not Null,
estado_Cargo bit not null
);
--Creación Tabla Tipos de Financiamiento
Create Table tbl_Tipos_Financiamiento(
id_Tipo_Financiamiento INT Primary Key Identity(1,1),
financiamiento nvarchar(30) Not Null,
estado_Tipo_Financiamiento bit not null
);
--Creación Tabla Fuentes de Financiamiento
Create Table tbl_Fuentes_Financiamiento(
id_Fuente_Financiamiento INT Primary Key Identity(1,1),
fuente_Financiamiento nvarchar(50) Not Null,
estado_Fuente_Financiamiento bit not null
);
--Creación Tabla Tipos de Usuario
Create Table tbl_Tipos_Usuario(
id_Tipo_Usuario INT Primary Key Identity(1,1),
descripcion_Tipo nvarchar(30) Not Null,
estado_Tipo_Usuario bit not null
);
--Creación Tabla Estados Usuario
Create Table tbl_Estados_Usuario(
id_Estado_Usuario INT Primary Key Identity(1,1),
estado_Usuario nvarchar(15) Not Null
);
--Creación Tabla Usuarios
Create Table tbl_Usuarios(
id_Usuario INT Primary Key Identity(1,1),
nombre_Usuario nvarchar(50) Not Null,
telefono_Usuario nvarchar(25) Not Null,
dni_Usuario nvarchar(50) Not Null,
correo_Usuario nvarchar(100) Not Null,
contrasenia_Usuario nvarchar(50) Not Null,
ultima_Contrasenia nvarchar(50),
create_At DateTime,
update_At DateTime,
id_Estado_Usuario INT Not Null,
pin_Respaldo INT,
id_Tipo_Usuario INT Not Null,
sexo nvarchar(30) not null,
Constraint fk_Estado_Usuario Foreign Key (id_Estado_Usuario)
References tbl_Estados_Usuario(id_Estado_Usuario),
Constraint fk_Tipo_Usuario Foreign Key (id_Tipo_Usuario)
References tbl_Tipos_Usuario(id_Tipo_Usuario)
);
--Creación Tabla Asignación Usuario
Create Table tbl_Asignacion_Usuario(
id_Asignacion INT Primary Key identity(1,1),
id_Usuario INT Not Null,
id_Municipio nvarchar(10) Not Null,
estado_Asignacion bit not null,
Constraint fkUsuarios foreign key (id_Usuario)
references tbl_Usuarios(id_Usuario),
Constraint fkMunicipios foreign key (id_Municipio)
references tbl_Municipios(id_Municipio)
);
--Creacion Tabla Tecnologico General
Create Table tbl_Tecnologico_General(
id_Tecno int primary key identity(1,1),
nivel nvarchar(15) not null
);
--Creación Tabla Encuestas
Create Table tbl_Encuestas(
id_Encuesta INT Primary Key Identity(1,1),
total_Hombres INT Not Null,
total_Mujeres INT Not Null,
total_Asistencia INT Not Null,
id_Departamento nvarchar(10) Not Null,
id_Municipio nvarchar(10) Not Null,
id_Aldea nvarchar(10) Not Null,
id_Caserio nvarchar(10) Not Null,
direccion_Sede nvarchar(250) Not Null,
id_Organizacion INT Not Null,
existencia_Rio nvarchar(2) Not Null,
cantidad_Rio INT Not Null,
existencia_Bosque nvarchar(2) Not Null,
id_Tipo_Bosque INT Not Null,
id_Suelo INT Not Null,
id_Tenencia INT Not Null,
id_Mercado INT Not Null,
id_Tecno INT Not Null,
fecha_Encuesta DATETIME,
id_Usuario INT Not Null,
Constraint fk_DepartamentosE Foreign Key (id_Departamento)
References tbl_Departamentos(id_Departamento),
Constraint fk_MunicipiosE Foreign Key (id_Municipio)
References tbl_Municipios(id_Municipio),
Constraint fk_AldeasE Foreign Key (id_Aldea)
References tbl_Aldeas(id_Aldea),
Constraint fk_CaseriosE Foreign Key (id_Caserio)
References tbl_Caserios(id_Caserio),
Constraint fk_OrganizacionE Foreign Key (id_Organizacion)
References tbl_Organizaciones(id_Organizacion),
Constraint fk_Tipo_BosqueE Foreign Key (id_Tipo_Bosque)
References tbl_Tipos_Bosque(id_Tipo_Bosque),
Constraint fk_SuelosE Foreign Key (id_Suelo)
References tbl_Suelos(id_Suelo),
Constraint fk_TenenciaE Foreign Key (id_Tenencia)
References tbl_Tenencia_Tierra(id_Tenencia),
Constraint fk_Tecno Foreign Key (id_Tecno)
References tbl_Tecnologico_General(id_Tecno),
Constraint fk_MercadosE Foreign Key (id_Mercado)
References tbl_Mercados(id_Mercado),
Constraint fk_UsuariosE Foreign Key (id_Usuario)
References tbl_Usuarios(id_Usuario)
);
--Creación Tabla Financiamiento
Create Table tbl_Financiamientos(
id_Financiamiento INT Primary Key Identity(1,1),
id_Encuesta INT Not Null,
id_Tipo_Financiamiento INT Not Null,
id_Fuente_Financiamiento INT Not Null,
marco_Legal nvarchar (250) Not Null,
Constraint fk_EncuestaF Foreign Key (id_Encuesta)
References tbl_Encuestas(id_Encuesta),
Constraint fk_Tipo_FinanciamientoF Foreign Key (id_Tipo_Financiamiento)
References tbl_Tipos_Financiamiento (id_Tipo_Financiamiento),
Constraint fk_Fuente_FinanciamientoF Foreign Key (id_Fuente_Financiamiento)
References tbl_Fuentes_Financiamiento(id_Fuente_Financiamiento)
);
--Creación Tabla Geo Ubicaciones
Create Table tbl_Geo_Ubicaciones(
id_Geo_Ubicacion INT Primary Key Identity(1,1),
id_Encuesta INT Not Null,
longitud nvarchar(100) Not Null,
latitud nvarchar(100) Not Null,
Constraint fk_EncuestaGU Foreign Key (id_Encuesta)
References tbl_Encuestas(id_Encuesta),
);
--Creación Tabla Detalle de Organizaciones
Create Table tbl_Detalle_Organizaciones(
id_Detalle_Organizacion INT Primary Key Identity(1,1),
id_Encuesta INT Not Null,
id_Organizacion INT Not Null,
legalizado bit Not Null,
Constraint fk_EncuestaDO Foreign Key (id_Encuesta)
References tbl_Encuestas(id_Encuesta),
Constraint fk_OrganizacionGU Foreign Key (id_Organizacion)
References tbl_Organizaciones (id_Organizacion),
);
--Creación Tabla Tipos de Servicios
create table tbl_Tipo_Servicios(
id_Tipo_Servicio INT Primary Key Identity(1,1),
tipo_Servicio nvarchar(50) not null,
estado_Tipo_Servicio bit not null
);
--Creación Tabla Servicios
Create Table tbl_Servicios(
id_Servicio INT Primary Key Identity(1,1),
id_Tipo_Servicio int not null,
servicio nvarchar(150) Not Null,
estado_Servicio bit not null,
constraint fk_Tipo_Servicio foreign key (id_Tipo_Servicio)
References tbl_Tipo_Servicios(id_Tipo_Servicio)
);
--Creación Tabla Servicios B�sicos
Create Table tbl_Servicios_Basicos(
id_Servicio_Basico INT Primary Key Identity(1,1),
id_Encuesta INT Not Null,
id_Servicio INT Not Null,
Constraint fk_EncuestaSB Foreign Key (id_Encuesta)
References tbl_Encuestas(id_Encuesta),
Constraint fk_Servicio Foreign Key (id_Servicio)
References tbl_Servicios(id_Servicio),
);
--Creación Tabla Servicios Locales
Create Table tbl_Servicios_Locales(
id_Servicio_Local INT Primary Key Identity(1,1),
id_Encuesta INT Not Null,
id_Servicio INT Not Null,
Constraint fk_EncuestaS Foreign Key (id_Encuesta)
References tbl_Encuestas(id_Encuesta),
Constraint fk_Servicio2 Foreign Key (id_Servicio)
References tbl_Servicios(id_Servicio),
);
--Creación Tabla Exportaciones
Create Table tbl_Exportaciones(
id_Exportacion INT Primary Key Identity(1,1),
id_Encuesta INT Not Null,
descripcion_Exportacion nvarchar(150) Not Null,
Constraint fk_EncuestaEX Foreign Key (id_Encuesta)
References tbl_Encuestas(id_Encuesta),
);
--Creación Tabla Importaciones
Create Table tbl_Importaciones(
id_Importacion INT Primary Key Identity(1,1),
id_Encuesta INT Not Null,
descripcion_Importacion nvarchar(150) Not Null,
Constraint fk_EncuestaIM Foreign Key (id_Encuesta)
References tbl_Encuestas(id_Encuesta),
);
--Creación Tabla Usos de la Tierra
Create Table tbl_Usos_Tierra(
id_Uso_Tierra INT Primary Key Identity(1,1),
uso_Tierra nvarchar(50) not null
);
--Creacion Tabla Detalle Usos Tierra
Create Table tbl_Detalle_Usos_Tierra(
id_Detalle_Uso_Tierra INT Primary Key Identity(1,1),
id_Encuesta INT Not Null,
id_Uso_Tierra INT Not Null,
Constraint fk_EncuestaUT Foreign Key (id_Encuesta)
References tbl_Encuestas(id_Encuesta),
Constraint fk_usos Foreign Key (id_Uso_Tierra)
References tbl_Usos_Tierra(id_Uso_Tierra),
);
--Creación Tabla Miembros de la Junta Directiva
Create Table tbl_Junta_Directiva(
id_Miembro_Junta INT Primary Key Identity(1,1),
id_Encuesta INT Not Null,
id_Cargo INT Not Null,
id_Eje INT Not Null,
dni_Cargo nvarchar(20) Not Null,
nombre_Junta nvarchar(40) Not Null,
telefono_Junta nvarchar(20) Not Null,
Constraint fk_EncuestaJD Foreign Key (id_Encuesta)
References tbl_Encuestas(id_Encuesta),
Constraint fk_CargosJD Foreign Key (id_Cargo)
References tbl_Cargos(id_Cargo),
Constraint fk_EjesJD Foreign Key (id_Eje)
References tbl_Ejes(id_Eje),
);
--Creación tabla de Estructuras
create table tbl_Estructuras(
id_Estructura int primary key identity(1,1),
estructura nvarchar(150) not null,
estado_Estructura bit not null
);
--Creación Tabla de Requerimientos de Inversión Social
Create Table tbl_Requerimientos(
id_Requerimiento INT Primary Key Identity(1,1),
id_Encuesta INT Not Null,
id_Estructura int Not Null,
id_Estado INT Not Null,
observacion_Requerimiento nvarchar(250),
Constraint fk_EncuestaRS Foreign Key (id_Encuesta)
References tbl_Encuestas(id_Encuesta),
Constraint fk_EstadosRS Foreign Key (id_Estado)
References tbl_Estados(id_Estado),
Constraint fk_ID_Estructura Foreign Key (id_Estructura)
References tbl_Estructuras(id_Estructura)
);
