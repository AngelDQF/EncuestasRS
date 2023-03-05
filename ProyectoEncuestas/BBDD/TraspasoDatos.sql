insert into tbl_Departamentos([id_Departamento],[departamento])
select [id_Departamento],[departamento]
from [dbo].[Departamentos]

insert into tbl_Municipios([id_Municipio],[id_Departamento],[municipio])
select [id_Municipio],[id_Departamento],[municipio]
from Municipios

insert into tbl_Aldeas([id_Aldea],[id_Municipio],[aldea])
select [id_Aldea],[id_Municipio],[aldea]
from Aldeas

insert into tbl_Caserios([id_Caserio],[id_Aldea],[caserio])
select [id_Caserio],[id_Aldea],[caserio]
from Caserios