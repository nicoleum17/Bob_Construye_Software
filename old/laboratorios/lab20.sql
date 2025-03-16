CREATE DATABASE empresa;
USE empresa;

SELECT * FROM materiales;

SELECT * FROM materiales
WHERE clave=1000;

SELECT clave,rfc,fecha FROM entregan;

-- Solo se muestran los materiales que se han entregado
SELECT * FROM materiales,entregan
WHERE materiales.clave = entregan.clave;

SELECT * FROM entregan,proyectos
WHERE entregan.numero <= proyectos.numero;

(SELECT * FROM entregan WHERE clave=1450)
UNION
(SELECT * FROM entregan WHERE clave=1300);

-- Alternativa
SELECT * FROM entregan WHERE clave=1450 OR clave=1300;

-- Con una subconsulta
/*
(select clave from entregan where numero=5001)
intersect
(select clave from entregan where numero=5018);
*/
SELECT clave FROM entregan 
WHERE numero = 5001 
AND clave IN (SELECT clave FROM entregan WHERE numero = 5018);

/* MINUS subconsulta
(select * from entregan)
minus
(select * from entregan where clave=1000);
*/
SELECT * FROM entregan
WHERE clave NOT IN (SELECT clave FROM entregan WHERE clave=1000);

-- Se podría decir que la cantidad de tuplas se multiplica entre si
-- Ya que el prod cartesiano son todas las combinaciones posibles
SELECT * FROM entregan,materiales;

-- Porque se han entregado varias veces
SELECT descripcion FROM materiales m, entregan e
WHERE m.clave=e.clave AND e.fecha BETWEEN '01/01/00' AND '31/12/00';

-- Ya no se repiten descripciones
SELECT DISTINCT descripcion FROM materiales m, entregan e
WHERE m.clave=e.clave AND e.fecha BETWEEN '01/01/00' AND '31/12/00';

SELECT p.numero, p.denominacion, e.fecha, e.cantidad
FROM proyectos p, entregan e
WHERE p.numero=e.numero
ORDER BY numero DESC, fecha DESC;

/*
Se obtienen las tuplas de materiales que su descripcion entra inicia por 'si'
% es para indicar que hay más caracteres
si solo fuese like 'si' devuelve solo las descripciones que tengan exacto 'si'
porque se esta pidiento que la decripcion sea 'si' sin mas elementos
*/
SELECT * FROM materiales where Descripcion LIKE 'Si%';

-- El LIKE en mysqlworkbench no funciona, alternativa
-- SELECT RFC FROM Entregan WHERE RFC LIKE '[A-D]%';
-- Aqui se obtienen los rfc con a, b, c, d
SELECT RFC FROM Entregan WHERE RFC REGEXP '^[A-D]';

-- se elimina el rango para que funcione en workbench
-- Se obtienen los rfc solo con a
SELECT RFC FROM Entregan WHERE RFC LIKE 'A%';

-- Se obtienen los numeros de entrega con 3 digitos y un 6
SELECT Numero FROM Entregan WHERE Numero LIKE '___6';

-- Between se usa para condiciones donde es por un rango de fechas
SELECT Clave,RFC,Numero,Fecha,Cantidad
FROM Entregan
WHERE Numero Between 5000 and 5010;

/* Subconsulta para obtener donde numero esta entre 5000 y 5010
pero que la razon social inicia con La (intersect)
*/
SELECT RFC,Cantidad, Fecha, Numero
FROM Entregan
WHERE Numero Between 5000 and 5010 AND
Exists ( SELECT RFC
FROM Proveedores
WHERE RazonSocial LIKE 'La%' and Entregan.RFC = Proveedores.RFC );

-- No funciona en MySQL Workbench
-- SELECT TOP 2 * FROM Proyectos;
/*Obtiene los primeros dos valores ordenados de mayor a menor*/
SELECT * FROM Proyectos ORDER BY numero asc LIMIT 2;

-- SELECT TOP Numero FROM Proyectos;
SELECT * FROM Proyectos ORDER BY numero asc LIMIT 1;

-- Vistas

create view topProyecto (numero, descripcion) 
as SELECT * FROM Proyectos ORDER BY numero asc LIMIT 1;

select * from topProyecto;

create view entregasdosmil (descipcion)
AS SELECT DISTINCT descripcion FROM materiales m, entregan e
WHERE m.clave=e.clave AND e.fecha BETWEEN '01/01/00' AND '31/12/00';

select * from entregasdosmil;

create view interseccion (clave)
as SELECT clave FROM entregan 
WHERE numero = 5001 
AND clave IN (SELECT clave FROM entregan WHERE numero = 5018);

select * from interseccion;