# Calculadora API RESTful

Este proyecto es una API RESTful que permite realizar operaciones matemáticas básicas: suma, resta, multiplicación, división y potencias.

## Autor

**Nombre**: TU_NOMBRE

## Descripción

La API tiene las siguientes funcionalidades:
- **Suma**: Calcula la suma de dos números.
- **Resta**: Resta dos números.
- **Multiplicación**: Multiplica dos números.
- **División**: Divide dos números.
- **Potencia**: Eleva un número a la potencia de otro.

## Endpoints

### 1. Suma

- **Método**: `GET`
- **Ruta**: `calculator/results/:n1/:n2`
- **Descripción**: Retorna la suma de `n1` y `n2`.

**Ejemplo**:
```bash
GET calculator/results/3/5