## Week 20 Day 2

### SQL Part-12

**Unions**

https://dev.mysql.com/doc/refman/8.0/en/union.html

```mysql
## get the people count by age ranges
SELECT gender, count(id), '20-24' as age_range FROM persons WHERE age >= 20 and age <= 24 GROUP BY gender UNION SELECT gender, count(id), '25-29' FROM persons WHERE age >= 25 and age <= 29 GROUP BY gender;

# get the people count by continent
SELECT gender, count(id), 'Asia' as continent FROM persons WHERE country IN ('India', 'Pakistan', 'Sri Lanka') GROUP BY gender UNION SELECT gender, count(id), 'Europe' as continent FROM persons WHERE country IN ('Spain', 'Italy', 'Ireland') GROUP BY gender UNION SELECT gender, count(id), 'South America' as continent FROM persons WHERE country IN ('Brazil', 'Paraguay', 'Chile') GROUP BY gender;
```

**Control Flows**

https://dev.mysql.com/doc/refman/8.0/en/control-flow-functions.html

```mysql
## get the people count by continent
SELECT count(id), gender, 
    CASE country
        WHEN 'India' THEN 'Asia'
        WHEN 'Pakistan' THEN 'Asia'
        WHEN 'Sri Lanka' THEN 'Asia'
        WHEN 'Spain' THEN 'Europe'
        WHEN 'Italy' THEN 'Europe'
        WHEN 'Ireland' THEN 'Europe'
        ELSE 'Other'
    END
AS continent FROM persons GROUP BY continent, gender;

## get the people count by age ranges
SELECT count(id), gender, IF ( age >= 20 AND age <= 24, "20-24", IF ( age >= 25 AND age <= 29, "25-29", "others")) AS age_range FROM persons GROUP BY age_range, gender;
```

