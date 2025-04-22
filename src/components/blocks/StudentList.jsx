// src/components/StudentList.jsx
import useStore from '../../store';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

export function StudentList() {
    const {
        students,
        isStudentLoading,
        error,
        fetchStudents,
        addStudent,
        removeStudent,
    } = useStore();

    useEffect(() => {
        fetchStudents();
    }, []);

    if (isStudentLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


    const addStudents = () => {
        const randomId = Math.floor(100 + Math.random() * 900);
        addStudent({
            id: randomId,
            name: 'New  Student ' + randomId,
            email: 'newstudent' + randomId + '@example.com',
        });
    }

    const removeStudents = (studentId) => () => {
        removeStudent(studentId);
    }

    return (
        <div>
            <div className="items-center justify-center flex gap-7 mb-3">
                <h2 className="text-2xl font-semibold text-center h-full">{"Students : " + students.length}</h2>
                <Button onClick={addStudents}>Add +</Button>
            </div>


            {students.map(student => (
                <StudentCard key={student.id} student={student} removeStudents={removeStudents} />
            ))}



        </div>
    );
}

function StudentCard({ student, removeStudents }) {
    return (

        <Card className="mb-4">
            <CardHeader>
                <h2 className="text-2xl font-semibold">{student.name}</h2>
                <p className="text-lg text-muted-foreground">{student.email}</p>
            </CardHeader>
            <CardFooter>
                <Button variant="destructive" onClick={removeStudents(student.id)}>Remove</Button>
            </CardFooter>
        </Card>
    );
}