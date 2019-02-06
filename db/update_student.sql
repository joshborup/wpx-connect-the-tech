UPDATE students
SET cohort = $2
WHERE student_id = $1;
SELECT * FROM students
order by student_id desc;