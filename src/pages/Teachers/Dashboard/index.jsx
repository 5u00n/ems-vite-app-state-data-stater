import  { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import {
Card,
CardContent,
CardHeader,
CardTitle,
} from "@/components/ui/card";

const TeacherDashboard = () => {
const [date, setDate] = useState(new Date());

return (
    <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Teacher Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Quick Stats Cards */}
            <Card>
                <CardHeader>
                    <CardTitle>Total Students</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-3xl font-bold">150</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Classes Today</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-3xl font-bold">5</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Assignments Due</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-3xl font-bold">8</p>
                </CardContent>
            </Card>

            {/* Calendar Card */}
            <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                    <CardTitle>Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                    />
                </CardContent>
            </Card>

            {/* Quick Actions Card */}
            <Card>
                <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <Button className="w-full">Take Attendance</Button>
                    <Button className="w-full">Create Assignment</Button>
                    <Button className="w-full">Schedule Meeting</Button>
                    <Button className="w-full">View Reports</Button>
                </CardContent>
            </Card>
        </div>
    </div>
);
};

export default TeacherDashboard;