-----------------------------
-- Welcome to the Table -----
-----------------------------


CREATE PROCEDURE projectList()
BEGIN
	SELECT project_name,team_lead,income
    from Projects
    order by internal_id asc;
END


CREATE PROCEDURE countriesSelection()
BEGIN
    select name, continent, population
    from countries
    where continent = 'Africa';
END

CREATE PROCEDURE monthlyScholarships()
BEGIN
    select id, scholarship/12 scholarship
    from scholarships
    order by id;
END


CREATE PROCEDURE projectsTeam()
BEGIN
    select distinct(name) name
    from projectLog
    order by name;
END


CREATE PROCEDURE automaticNotifications()
    SELECT email
    FROM users
    WHERE role not in ("admin", "premium")

    ORDER BY email;




---------------------------------
-- Always Leave Table in ORDER --
---------------------------------

CREATE PROCEDURE volleyballResults()
BEGIN
    select name
            ,country
            ,scored
            ,missed
            ,wins
    from results
    order by wins asc;
END

CREATE PROCEDURE mostExpensive()
BEGIN
    select TOT.name
    from
    ( 
        select name
                ,price*quantity am
        from products
        
        order by price*quantity desc, name ASC
    ) TOT
    LIMIT 1
    ;
    
END


CREATE PROCEDURE contestLeaderboard()
BEGIN
    SELECT name
    from leaderboard
    order by score DESC
    limit 3, 5;
END


CREATE PROCEDURE gradeDistribution()
BEGIN
    SELECT Name, ID
    FROM GRADES
    WHERE final > ((Midterm1*0.25)+(Midterm2*0.25)+(final*0.5))
    and final > ((Midterm1*0.5)+(Midterm2*0.5))
    order by substring(Name,1,3) asc, ID asc;
END

CREATE PROCEDURE mischievousNephews()
BEGIN
    select  (DAYOFWEEK(DATE_ADD(mischief_date,INTERVAL -1 DAY))-1) weekday
        ,mischief_date, author, title
    from mischief
    order by weekday asc, 
    case author
        WHEN 'Huey' THEN 1
        WHEN 'Dewey' THEN 2
        ELSE 3
    END asc,
    mischief_date asc,
    title asc;
END

-------------------------------------
-- Would you LIKE the Second Meal? --
-------------------------------------

CREATE PROCEDURE suspectsInvestigation()
BEGIN
    SELECT id,name,surname
    FROM Suspect
    WHERE LOWER(name) LIKE 'b%'
    and surname like 'Gre_n'
    and height <= 170
    order by id asc;
END

CREATE PROCEDURE suspectsInvestigation2()
BEGIN
    select id,name,surname
    from Suspect
    where not (lower(surname) like 'gre_n'
    and lower(name)  like 'b%')
    or height <= 170
    order by id asc;
END


CREATE PROCEDURE securityBreach()
BEGIN
    select first_name,second_name,attribute
    from users
    where attribute like BINARY concat('_%!%',first_name,'!_',second_name,'!%%') ESCAPE '!'
    order by attribute asc;
END


CREATE PROCEDURE testCheck()
    SELECT id, IF (given_answer = correct_answer, 'correct', IF(given_answer is null,'no answer','incorrect')) AS checks
    FROM answers
    ORDER BY id;


CREATE PROCEDURE expressionsVerification()
BEGIN
    select id,a,b,operation,c
    from expressions
    where case 
        WHEN operation = '+' THEN a+b
        WHEN operation = '-' THEN a-b
        WHEN operation = '/' THEN a/b
        ELSE a*b
    END = c
    order by id asc;
END

CREATE PROCEDURE newsSubscribers()
BEGIN
    select distinct(subscriber)
    from
    (
        select newspaper,subscriber
        from full_year 
        union 
        select newspaper,subscriber
        from half_year
    ) subs
    where newspaper like '%Daily%'
    order by subscriber asc;
END


--------------------------
-- GROUP Dishes BY Type --
--------------------------


CREATE PROCEDURE countriesInfo()
BEGIN
    select count(name) as number, AVG(population) as average, sum(population) as total
    from countries;
END

CREATE PROCEDURE itemCounts()
BEGIN
    select item_name, item_type, count(item_name) item_count
    from availableItems
    group by item_name, item_type
    order by item_type asc, item_name asc
    ;
END

CREATE PROCEDURE usersByContinent()
BEGIN
    select continent, sum(users) users
    from countries
    group by continent
    order by users desc
    ;
END

CREATE PROCEDURE movieDirectors()
BEGIN
    select director
    FROM
    (    select director, sum(oscars) oscars
        from moviesInfo
        where year > 2000
        group by director
    ) movies
    where oscars > 2
    order by director asc;
END


CREATE PROCEDURE travelDiary()
BEGIN
    select GROUP_CONCAT(distinct country ORDER BY country asc SEPARATOR ',' ) countries
    from diary
    ;
END

CREATE PROCEDURE soccerPlayers()
BEGIN
    select group_concat(first_name,' ',surname, ' #',player_number order by player_number asc SEPARATOR '; ' ) players
    from soccer_team
    order by player_number asc;
END

CREATE PROCEDURE marketReport()
BEGIN
    select IF(GROUPING(country) = 1, 'Total:', country) AS country 
        ,count(competitor) competitors
    from foreignCompetitors
    GROUP by country WITH ROLLUP
    ;
END

-----------------------------
-- Time for Tricks ----------
-----------------------------
CREATE PROCEDURE websiteHacking()
    SELECT id,login,name
    FROM users
    WHERE type='user'
    OR TYPE IS NOT NULL
    ORDER BY id;
END

CREATE PROCEDURE nullIntern()
BEGIN
    select count(id) number_of_nulls
    from departments
    where description is null
    or trim(description) in ('NULL','nil', '-')
    ;
END


DROP PROCEDURE IF EXISTS legsCount;
CREATE PROCEDURE legsCount()
    SELECT sum(type*2 - if(type=3,2,0)) as summary_legs
    FROM creatures
    ORDER BY id;
END

CREATE PROCEDURE combinationLock()
BEGIN
    set @c := 1;
    select @c := @c * LENGTH(characters) AS combinations
    FROM
        discs
    ; 
END


-----------------
-- Specialties --
-----------------

CREATE PROCEDURE interestClub()
    SELECT name
    FROM people_interests
    WHERE interests & b'000000000001' AND interests & b'000000001000'
    ORDER BY name
    ;
END

CREATE PROCEDURE personalHobbies()
BEGIN
    select name
    from people_hobbies
    where  FIND_IN_SET('reading',hobbies)>0 and FIND_IN_SET('sports',hobbies)>0 
    order by name asc;
END

CREATE PROCEDURE booksCatalogs()
BEGIN
    select ExtractValue(xml_doc,'/catalog/book[1]/author') author
    from catalogs
    order by author asc;
END


CREATE PROCEDURE habitatArea()
BEGIN
    select ST_Area(ST_ConvexHull(ST_GeomFromText(CONCAT('','MULTIPOINT(',GROUP_CONCAT(x,' ',y SEPARATOR ","),')')))) AS area
    FROM places;
END


-----------------------------
-- WHEN was it the CASE? ---
-----------------------------

CREATE PROCEDURE orderOfSuccession()
BEGIN
    select if(gender='F', CONCAT('Queen ', name), CONCAT('King ', name)) name
    from Successors
    order by birthday asc;
END

CREATE PROCEDURE orderingEmails()
BEGIN
    select id
        ,email_title
        ,case  
            when size >= power(2,20) then concat(floor(size/power(2,20)),' Mb')
            else concat(floor(size/power(2,10)),' Kb')
        end as short_size
    from emails
    order by size desc;
END

CREATE PROCEDURE placesOfInterest()
BEGIN
    select country
        ,sum(if(leisure_activity_type='Adventure park',number_of_places,0)) adventure_park
        ,sum(if(leisure_activity_type='Golf',number_of_places,0)) golf
        ,sum(if(leisure_activity_type='River cruise',number_of_places,0)) river_cruise
        ,sum(if(leisure_activity_type='Kart racing',number_of_places,0)) kart_racing
    from countryActivities
    GROUP by country
    order by country asc; 
END

CREATE PROCEDURE soccerGameSeries()
BEGIN
    set @win1 := 0;
    set @win2 := 0;
    
    with wins AS
    (
    SELECT match_id
        ,CASE   
            when first_team_score>second_team_score then @win1 := @win1+1
            else @win1
        end win1
        ,CASE   
            when first_team_score<second_team_score then @win2 := @win2+1
            else @win2
        end win2
        ,first_team_score-second_team_score diffGoals
        ,case 
            when match_host = 1 then  -second_team_score
            when match_host = 2 then  first_team_score
        end goalsAway
    from scores
    )
    ,crits AS
    (
    select max(win1) win1
        ,max(win2) win2
        ,sum(diffGoals) diffGoals
        ,sum(goalsAway) goalsAway
    from wins
    )
    select 
        case
            WHEN win1>win2 then 1
            when win1<win2 then 2
            when diffGoals>0 then 1
            when diffGoals<0 then 2
            when goalsAway>0 then 1
            when goalsAway<0 then 2
            else 0
        end winner
    from crits
    
    ;
END

-----------------------------
-- Regular Paradise----------
-----------------------------
CREATE PROCEDURE correctIPs()
BEGIN
    select id, ip
    from ips
    where IS_IPV4(ip)
    and ip REGEXP '^.*(([0-9]{2,4}.[0-9]+)|([0-9]+.[0-9]{2,4}))$'
    order by 1 asc;
END

CREATE PROCEDURE validPhoneNumbers()
BEGIN
    select name,surname,phone_number
    from phone_numbers
    where phone_number regexp '^[(]?1[)-]([0-9]{3}-){2}([0-9]{4})$'
    order by surname asc
    ;
END

-----------------------------
-- Time River Revisited --
-----------------------------

CREATE PROCEDURE importantEvents()
BEGIN
    SELECT id
            , name
            ,event_date
            ,participants
            
    FROM events
    order by WEEKDAY(event_date) asc,  participants desc
    ;
END

CREATE PROCEDURE dateFormatting()
BEGIN
    SELECT DATE_FORMAT(date_str,'%Y-%m-%d') AS date_iso
    FROM documents
    ORDER BY ID
    ;
END

CREATE PROCEDURE pastEvents()
BEGIN
    with eventosmax AS
    (
        select name
                ,event_date
                ,max(event_date) OVER () as maxdate
        from events
    )
        SELECT name
                ,event_date
                
        from eventosmax
        where DATEDIFF(maxdate,event_date)>0 and DATEDIFF(maxdate,event_date)<=7
        order by event_date desc
    
    ;
END


CREATE PROCEDURE netIncome()
BEGIN
    with data AS
    (   
        SELECT YEAR(date) YEAR
                ,QUARTER(date) QUARTER
                ,cast(profit as SIGNED) - cast(loss as signed) net_profit
        FROM accounting
    )
    SELECT YEAR, QUARTER
            ,sum(net_profit) net_profit
    from DATA
    GROUP by YEAR, QUARTER
    order by YEAR, QUARTER
    
    ;
END



CREATE PROCEDURE alarmClocks()
BEGIN

    CREATE TEMPORARY TABLE USER_ALARMS
    (
        alarm_date DATETIME
    );
    
    SET @x = 0;
    SELECT input_date, year(input_date) into @date, @year
    FROM userInput;
    
    REPEAT
    SELECT ADDDATE(@date,7*@x), year(ADDDATE(@date,7*@x)) into @insertdate, @insertyear;
        INSERT INTO USER_ALARMS (alarm_date)
        values(@insertdate);
        SET @x = @x + 1;
    UNTIL  @insertyear > @year
    END REPEAT; 
    
        
    SELECT alarm_date
    FROM USER_ALARMS
    where year(alarm_date) = @year ;
    
    DROP TEMPORARY TABLE USER_ALARMS;
END



-----------------------------
-- JOIN Us at the Table! ----
-----------------------------


CREATE PROCEDURE companyEmployees()
BEGIN
    SELECT dep_name, emp_name
    FROM departments
    CROSS JOIN employees
    ORDER BY dep_name, emp_name;
    
END

CREATE PROCEDURE scholarshipsDistribution()
BEGIN
    SELECT C.candidate_id 
    FROM candidates C
    LEFT OUTER JOIN detentions D ON D.student_id = C.candidate_id 
    WHERE D.detention_date IS NULL
    ;
END

CREATE PROCEDURE userCountries()
BEGIN
    SELECT U.ID
        , IFNULL(C.country,'unknown') country
    FROM users U
    LEFT OUTER JOIN cities C ON U.CITY = C.CITY
    ORDER BY U.ID
    ;
    
END

CREATE PROCEDURE placesOfInterestPairs()
BEGIN
    WITH DIS AS
    (
        SELECT S.id ID
            , C.id CID
            , S.NAME place1
            , C.NAME place2
            ,ROUND(sqrt(pow((S.X-C.X),2)+pow((S.Y-C.Y),2)),4) AS DISTANCE
           -- ,ROW_NUMBER() OVER () col
        FROM sights S
        CROSS JOIN sights C
        WHERE sqrt(pow((S.X-C.X),2)+pow((S.Y-C.Y),2)) >0
        AND  sqrt(pow((S.X-C.X),2)+pow((S.Y-C.Y),2)) <=5
        
      --   ORDER BY place1
       
    )
    ,FILTER AS
    (
        SELECT ID,CID,place1,place2,DISTANCE
        -- , col
        ,ROW_NUMBER () OVER ( PARTITION BY DISTANCE ORDER by place1) as COL
        FROM DIS
    )
    SELECT place1,place2
    -- ,DISTANCE, COL
    FROM FILTER
    WHERE MOD(COL,2) <> 0
    ORDER BY place1 asc, place2 asc
    
    
    
    
    ;
END



CREATE PROCEDURE localCalendar()
BEGIN
    SELECT E.EVENT_ID
            
             ,CASE 
             WHEN  S.hours = 24 THEN DATE_FORMAT(DATE_ADD(E.DATE,INTERVAL IFNULL(S.timeshift,0) MINUTE),'%Y-%m-%d %H:%i') 
             when S.hours = 12 THEN DATE_FORMAT(DATE_ADD(E.DATE,INTERVAL IFNULL(S.timeshift,0) MINUTE),'%Y-%m-%d %h:%i %p') 
             END formatted_date
    FROM events E
    LEFT outer JOIN SETTINGS S ON E.USER_ID = S.USER_ID
   ;  
END


CREATE PROCEDURE routeLength()
BEGIN
    WITH INI AS
    
    (
        select ID
            ,X
            ,Y
            ,LEAD(X) OVER (ORDER BY ID) XP
            ,LEAD(Y) OVER (ORDER BY ID) YP
        FROM CITIES
    )
    ,DIS AS
    (    
        SELECT ID,X,Y,XP,YP
                ,SQRT(POWER((X-XP),2)+POWER((Y-YP),2)) DISTANCE
        FROM INI
        WHERE XP IS NOT NULL
    )
    SELECT ROUND(SUM(DISTANCE),9) total
    FROM DIS
    ;
END


-----------------------------
-- Table Metamorphoses ------
-----------------------------

CREATE PROCEDURE currencyCodes()
BEGIN
    DELETE FROM currencies
    where LENGTH(code) <> 3;

    SELECT * FROM currencies ORDER BY code;
END


CREATE PROCEDURE coursesDistribution()
BEGIN
    ALTER TABLE groupcourses ADD FOREIGN KEY (course_id)
    REFERENCES courses (id)
    ON DELETE CASCADE;

    ALTER TABLE groupexams ADD FOREIGN KEY (course_id)
    REFERENCES courses (id)
    ON DELETE CASCADE;

    DELETE FROM courses WHERE name LIKE '%-toremove';


    SELECT group_id, course_id
      FROM groupcourses
     UNION
    SELECT group_id, course_id
      FROM groupexams
     ORDER BY group_id, course_id;
END


CREATE PROCEDURE nicknames()
BEGIN
    UPDATE reservedNicknames
    SET id = CONCAT('rename - ',id), nickname = CONCAT('rename - ',nickname)
    WHERE LENGTH(nickname) <> 8;

    SELECT * FROM reservedNicknames ORDER BY id;
END


CREATE PROCEDURE tableSecurity()
BEGIN
    CREATE OR REPLACE VIEW emp
    AS SELECT id, name, year(date_joined) date_joined, '-' salary from employees;

    SELECT id, name, date_joined, salary
    FROM emp
    ORDER BY id;
END


CREATE PROCEDURE officeBranches()
BEGIN
    ALTER TABLE branches ADD FOREIGN KEY (branchtype_id)
    REFERENCES branch_types(id) on DELETE SET NULL;

    DELETE FROM branch_types WHERE name LIKE '%-outdated';

    SELECT * FROM branches
    ORDER BY branch_id;
END


CREATE PROCEDURE restaurantInfo()
BEGIN
    ALTER TABLE restaurants ADD COLUMN description VARCHAR(100), ADD COLUMN active INTEGER;
    UPDATE restaurants SET description = 'TBD' ,active = 1;

    SELECT * FROM restaurants ORDER BY id;
END


------------------------------
-- Selecting What to SELECT --
------------------------------

CREATE PROCEDURE studentsInClubs()
    SELECT * FROM students
    WHERE EXISTS (
        SELECT * FROM clubs WHERE students.club_id = clubs.id
    )
    ORDER BY students.id;
;
END

CREATE PROCEDURE emptyDepartments()
BEGIN
    SELECT dep_name
    FROM departments D
    WHERE NOT EXISTS (
        SELECT *
        FROM employees E
        WHERE E.department = D.id
    )
    ORDER BY ID;
END


CREATE PROCEDURE sunnyHolidays()
BEGIN
    SELECT holiday_date ski_date
    FROM holidays H
    WHERE EXISTS (
        SELECT *
        FROM weather W
        WHERE H.holiday_date = W.sunny_date
    )
    ORDER BY holiday_date;
END


CREATE PROCEDURE closestCells()
BEGIN
    with info as   
    (   SELECT P1.id id1
                ,P2.id id2
                ,sqrt(power((P1.x-P2.x),2)+power((P1.y-P2.y),2)) distance
        FROM positions P1
        CROSS JOIN positions P2
        Where sqrt(power((P1.x-P2.x),2)+power((P1.y-P2.y),2)) > 0
        
    )
    ,minD AS
    (
        SELECT id1,
                id2
                ,distance
                ,min(distance) over (PARTITION by id1) mindistance
        from info
    )
    SELECT id1,
            id2
            
    from minD
    where distance = mindistance
    order by id1
    ;
END

CREATE PROCEDURE top5AverageGrade()
BEGIN
    WITH DATOS AS
    (
        SELECT GRADE
        FROM students
        ORDER BY GRADE DESC
        LIMIT 5
    )
    SELECT ROUND(AVG(GRADE),2) average_grade
    FROM DATOS
    ;
END

CREATE PROCEDURE salaryDifference()
BEGIN
    WITH INFO AS
    (
        SELECT 
                ID
                ,SALARY
                ,MIN(SALARY) OVER () MINI
                ,MAX(SALARY) OVER () MAXI              
                
        FROM employees
    ),MINMAX AS
    (    
        SELECT 
                IF(SALARY - MINI = 0, SALARY, 0) MEN
                ,IF(MAXI - SALARY = 0, SALARY, 0) MAS
        FROM INFO
        WHERE SALARY - MINI = 0
        OR MAXI - SALARY = 0
    )
    SELECT IFNULL(SUM(MAS) - SUM(MEN),0) salary_diff
    FROM MINMAX
    ;
END

CREATE PROCEDURE recentHires()
BEGIN
    WITH UNIV AS
    (
        SELECT id, name,date_joined, 'pr' dept, 1 ord
        FROM pr_department
        -- ORDER BY date_joined
        -- LIMIT 5
        UNION ALL
        SELECT id, name,date_joined, 'it' dept, 2 ord
        FROM it_department
        -- ORDER BY date_joined
        -- LIMIT 5
        UNION ALL
        SELECT id, name,date_joined, 'sa' dept, 3 ord
        FROM sales_department
        -- ORDER BY date_joined
        -- LIMIT 5
     ), RNUM AS
     (
        SELECT id, name,date_joined, dept, ord
            ,ROW_NUMBER() OVER (PARTITION BY dept ORDER BY date_joined DESC) ROWNUM
        FROM UNIV
     )
     SELECT name
     FROM RNUM
     WHERE ROWNUM <= 5
     order by ord, name
    ;
END

CREATE PROCEDURE checkExpenditure()
BEGIN
WITH DATOS AS
    (
        SELECT id ,left_bound,right_bound, value, monday_date,expenditure_sum   
            ,WEEK(EP.monday_date,3) week
        from allowable_expenditure AE 
        JOIN expenditure_plan EP ON (AE.LEFT_BOUND <= WEEK(EP.monday_date,7) AND AE.RIGHT_BOUND >= WEEK(EP.monday_date,7))
            
    )
    SELECT 
             id
             ,IF((SUM(expenditure_sum) - MAX(VALUE))>0,
             SUM(expenditure_sum) - MAX(VALUE), 0) loss
             
    FROM DATOS
    GROUP BY ID
    ;
END

CREATE PROCEDURE dancingCompetition()
BEGIN
    WITH INFO AS
    (
        select arbiter_id
            ,first_criterion
            ,second_criterion
            ,third_criterion
            ,IF((first_criterion - max(first_criterion) over () )=0,1,0) maxF
            ,IF((second_criterion- max(second_criterion) over ())=0,1,0) maxS
            ,IF((third_criterion- max(third_criterion) over ())=0,1,0) maxT
            ,IF((first_criterion - min(first_criterion) over ())=0,1,0) minF
            ,IF((second_criterion - min(second_criterion) over ())=0,1,0) minS
            ,IF((third_criterion - min(third_criterion) over ())=0,1,0) minT
            
        from scores
    )
    SELECT arbiter_id
            ,first_criterion
            ,second_criterion
            ,third_criterion
    FROM INFO
    WHERE maxF+maxS+maxT+minF+minS+minT <2
    ;
END

CREATE PROCEDURE trackingSystem()
BEGIN
    WITH data AS
    (
        SELECT anonymous_id
                ,user_id
                ,event_name
                ,received_at
                ,case 
                when user_id is null 
                then max(received_at) OVER (partition by anonymous_id, user_id)
                end as last_null
                ,case 
                when user_id is not null 
                then min(received_at) OVER (partition by user_id)
                else null end as first_notnull
        FROM tracks
    )
    ,info as 
    (
        select 
                anonymous_id
                ,if(received_at = last_null, event_name, null) last_null
                ,if(received_at = first_notnull,
                event_name, null) first_notnull
        from data
        -- GROUP by anonymous_id
    )
    select anonymous_id
            ,max(last_null) last_null
            ,max(first_notnull) first_notnull
    from info
    GROUP by anonymous_id
        ;
    
END


CREATE PROCEDURE storageOptimization()
BEGIN
    with data AS
    (
        select id
                ,'name' as column_name
                , name as value
                , 1   orden
        from workers_info
        where name is not NULL
        union all 
        select id
                ,'date_of_birth' as column_name
                ,date_of_birth as value
                , 2  orden
        from workers_info
        where date_of_birth is not NULL
        union all 
        select id
                ,'salary' AS column_name
                , salary AS value
                , 3  orden
        from workers_info
        where salary is not NULL
    )
    select id, column_name, VALUE
    from DATA
    order by id asc, orden asc
    ;
END


CREATE PROCEDURE consecutiveIds()
BEGIN
    select id
            ,row_number() over () newId
    from itemIds
    order by id
    ;
    
END

CREATE PROCEDURE holidayEvent()
BEGIN
    with data as
    (    
        select -- timestamp
                buyer_name
                ,rank () over (order by timestamp) numPur
        from purchases
        -- order by TIMESTAMP desc
    )
    select distinct buyer_name
            
    from DATA
    where numPur % 4 = 0
    order by buyer_name asc
    
    ;
END


CREATE PROCEDURE hostnamesOrdering()
BEGIN
      with orden AS
      (
        select id
                ,hostname
                ,SUBSTRING_INDEX(concat('...',hostname),'.',-1) C
                ,SUBSTRING_INDEX(SUBSTRING_INDEX(concat('...',hostname),'.',-2),'.',1) B
                ,SUBSTRING_INDEX(SUBSTRING_INDEX(concat('...',hostname),'.',-3),'.',1) A
                -- ,SUBSTRING_INDEX(SUBSTRING_INDEX(hostname,'.',3),'.',-1) C
                -- ,SUBSTRING_INDEX(SUBSTRING_INDEX(hostname,'.',2),'.',-1) B
                -- ,SUBSTRING_INDEX(hostname,'.',1) A
                
        from hostnames
        -- order by hostname asc
      )
        select  id
            ,hostname
        from  orden
        order by C asc, B asc, A asc
        
        
    ;
END

-----------------------------
-- Express your CREATivity --
-----------------------------

DROP PROCEDURE IF EXISTS orderAnalytics;
CREATE PROCEDURE orderAnalytics()
BEGIN

    with order_analytics AS
    (
        select ID
                ,year(order_date) year
                ,quarter(order_date) quarter
                ,TYPE
                ,price*quantity total_price
        from orders
    )

    SELECT *
    FROM order_analytics
    ORDER by id;
END;


DROP FUNCTION IF EXISTS response;
CREATE FUNCTION response(name VARCHAR(40)) RETURNS VARCHAR(200) DETERMINISTIC
BEGIN
    set @nombre = INSERT(LOWER(SUBSTRING_INDEX(name,' ',1)),1,1,UPPER(LEFT(SUBSTRING_INDEX(name,' ',1),1)));
    set @apellido = INSERT(LOWER(SUBSTRING_INDEX(name,' ',-1)),1,1,UPPER(LEFT(SUBSTRING_INDEX(name,' ',-1),1)));
    set @salida = CONCAT('Dear ',@nombre,' ',@apellido,'! We received your message and will process it as soon as possible. Thanks for using our service. FooBar On! - FooBarIO team.');
    return @salida;
    
END;

CREATE PROCEDURE customerMessages()
BEGIN
    SELECT id, name, response(name) AS response
    FROM customers;
END;

DROP FUNCTION IF EXISTS get_total;
CREATE FUNCTION get_total(items VARCHAR(45)) RETURNS INT DETERMINISTIC
BEGIN
    
    SET @precio=0; 
    set @item = 0;
    set @itera = 1;
    set @lastItem = 0;
    set @salida = 0;
    SELECT SUBSTRING_INDEX(items, ';',-1) into @lastItem;
    
    sumaItems: loop
        
        SELECT SUBSTRING_INDEX(SUBSTRING_INDEX(items, ';',@itera),';',-1) into @item;
        
            SELECT price + @precio into @precio
            from item_prices
            where id = @item 
       
        ;
        
        if @lastItem = @item then     
            LEAVE  sumaItems;
        end if;
        set @itera = @itera + 1;
        
        
    end loop sumaItems;
    
    
    RETURN @precio;
    
END;

CREATE PROCEDURE orderPrices()
BEGIN
    SELECT id, buyer, get_total(items) AS total_price
    FROM orders
    ORDER BY id;
END;


---------------------
-- Exotic Dishes ----
---------------------

CREATE PROCEDURE findTable()
BEGIN
    
    with tablas as
    (
        SELECT TABLE_NAME 
                ,TABLE_SCHEMA
        FROM information_schema.tables
        where table_type = 'BASE TABLE'
        and TABLE_SCHEMA = 'ri_db'
        and TABLE_NAME like 'e%s'
    )
    SELECT COLS.TABLE_NAME tab_name
            ,COLS.COLUMN_NAME col_name
            ,COLS.DATA_TYPE
    FROM information_schema.columns COLS
    JOIN TABLAS TAB ON (COLS.TABLE_NAME = TAB.TABLE_NAME AND COLS.TABLE_SCHEMA = TAB.TABLE_SCHEMA )
    order by COLS.TABLE_NAME 
            ,COLS.COLUMN_NAME
    ;
END

CREATE PROCEDURE queriesExecution()
BEGIN
    SET @a = CONCAT(
        (SELECT group_concat(
            concat('select "', 
                   query_name, 
                   '" query_name, (', 
                   code,
                   ') val')
            separator ' union ') from queries),
        ' order by 1');
     select @a;
     -- prepare qry from @a;
     -- execute qry;
    
END

-----------------------------
-- Between JOIN and SELECT --
-----------------------------

CREATE PROCEDURE filmLibrary()
BEGIN
    with genreCount as
    (
        select genre
            ,movie
            ,count(movie) over (partition by genre) as cuenta
        from movies
    )
    ,maxCuenta as
    (
        select -- * 
            cuenta
            ,max(cuenta) over () maxCuenta 
            ,genre
            ,movie         
        from genreCount
        -- where max(cuenta) = cuenta
     )
    select sa.actor
            ,aa.age
    from starring_actors sa 
    JOIN maxCuenta mc on mc.movie = sa.movie_name
    JOIN actor_ages aa on aa.actor = sa.actor
    where mc.cuenta = mc.maxCuenta
    order by aa.age desc, sa.actor asc
    ;
   
END
