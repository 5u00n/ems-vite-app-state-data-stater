import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup } from '@/components/ui/radio-group';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Tooltip } from '@/components/ui/tooltip';
import { Popover } from '@/components/ui/popover';
import { DropdownMenu } from '@/components/ui/dropdown-menu';    
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionItem } from '@/components/ui/accordion';
import { Alert } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Pagination } from '@/components/ui/pagination';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const AdmissionTemp = () => {
    const validationSchema = Yup.object({
        timestamp: Yup.date().required('Required'),
        emailAddress: Yup.string().email('Invalid email address').required('Required'),
        studentName: Yup.string().required('Required'),
        studentPhoto: Yup.mixed().required('Required'),
        studentID: Yup.string().required('Required'),
        studentClass: Yup.string().required('Required'),
        studentSection: Yup.string().required('Required'),
        studentGender: Yup.string().required('Required'),
        studentDOB: Yup.date().required('Required'),
        placeOfBirth: Yup.string().required('Required'),
        birthCertificate: Yup.mixed().required('Required'),
        studentReligion: Yup.string().required('Required'),
        studentCast: Yup.string().required('Required'),
        aadhaarNumber: Yup.string().required('Required'),
        aadhaarCard: Yup.mixed().required('Required'),
        motherTongue: Yup.string().required('Required'),
        bloodGroup: Yup.string().required('Required'),
        currentAddress: Yup.string().required('Required'),
        guardianName: Yup.string().required('Required'),
        guardianEmail: Yup.string().email('Invalid email address').required('Required'),
        guardianPhone: Yup.string().required('Required'),
        guardianAadhaar: Yup.string().required('Required'),
        motherName: Yup.string().required('Required'),
        motherPhone: Yup.string().required('Required'),
        motherEmail: Yup.string().email('Invalid email address').required('Required'),
        motherAadhaar: Yup.string().required('Required'),
        alternatePhone: Yup.string().required('Required'),
    });

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Student Admission Form</h1>
            <Formik
                initialValues={{
                    timestamp: '',
                    emailAddress: '',
                    studentName: '',
                    studentPhoto: null,
                    studentID: '',
                    studentClass: '',
                    studentSection: '',
                    studentGender: '',
                    studentDOB: '',
                    placeOfBirth: '',
                    birthCertificate: null,
                    studentReligion: '',
                    studentCast: '',
                    aadhaarNumber: '',
                    aadhaarCard: null,
                    motherTongue: '',
                    bloodGroup: '',
                    currentAddress: '',
                    guardianName: '',
                    guardianEmail: '',
                    guardianPhone: '',
                    guardianAadhaar: '',
                    motherName: '',
                    motherPhone: '',
                    motherEmail: '',
                    motherAadhaar: '',
                    alternatePhone: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ setFieldValue }) => (
                    <Form className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Student Information</CardTitle>
                            </CardHeader>
                            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="timestamp">Timestamp</Label>
                                    <Field name="timestamp" type="datetime-local" as={Input} />
                                    <ErrorMessage name="timestamp" component="div" className="text-red-500" />
                                </div>
                                <div>
                                    <Label htmlFor="emailAddress">Email Address</Label>
                                    <Field name="emailAddress" type="email" as={Input} />
                                    <ErrorMessage name="emailAddress" component="div" className="text-red-500" />
                                </div>
                                <div>
                                    <Label htmlFor="studentName">Student Name as per Aadhaar Card</Label>
                                    <Field name="studentName" type="text" as={Input} />
                                    <ErrorMessage name="studentName" component="div" className="text-red-500" />
                                </div>
                                <div>
                                    <Label htmlFor="studentPhoto">Upload student Passport Size photo (only image file)</Label>
                                    <input
                                        name="studentPhoto"
                                        type="file"
                                        className="input"
                                        onChange={(event) => {
                                            setFieldValue('studentPhoto', event.currentTarget.files[0]);
                                        }}
                                    />
                                    <ErrorMessage name="studentPhoto" component="div" className="text-red-500" />
                                </div>
                                <div>
                                    <Label htmlFor="studentID">Student ID</Label>
                                    <Field name="studentID" type="text" as={Input} />
                                    <ErrorMessage name="studentID" component="div" className="text-red-500" />
                                </div>
                                <div>
                                    <Label htmlFor="studentClass">Student Class</Label>
                                    <Field name="studentClass" type="text" as={Input} />
                                    <ErrorMessage name="studentClass" component="div" className="text-red-500" />
                                </div>
                                <div>
                                    <Label htmlFor="studentSection">Student Section</Label>
                                    <Field name="studentSection" type="text" as={Input} />
                                    <ErrorMessage name="studentSection" component="div" className="text-red-500" />
                                </div>
                                <div>
                                    <Label htmlFor="studentGender">Student Gender</Label>
                                    <Field name="studentGender" type="text" as={Input} />
                                    <ErrorMessage name="studentGender" component="div" className="text-red-500" />
                                </div>
                                <div>
                                    <Label htmlFor="studentDOB">Student Date of birth</Label>
                                    <Field name="studentDOB" type="date" as={Input} />
                                    <ErrorMessage name="studentDOB" component="div" className="text-red-500" />
                                </div>
                                <div>
                                    <Label htmlFor="placeOfBirth">Place of birth</Label>
                                    <Field name="placeOfBirth" type="text" as={Input} />
                                    <ErrorMessage name="placeOfBirth" component="div" className="text-red-500" />
                                </div>
                                <div>
                                    <Label htmlFor="birthCertificate">Upload student Birth Certificate</Label>
                                    <input
                                        name="birthCertificate"
                                        type="file"
                                        className="input"
                                        onChange={(event) => {
                                            setFieldValue('birthCertificate', event.currentTarget.files[0]);
                                        }}
                                    />
                                    <ErrorMessage name="birthCertificate" component="div" className="text-red-500" />
                                </div>
                                <div>
                                    <Label htmlFor="studentReligion">Student Religion</Label>
                                    <Field name="studentReligion" type="text" as={Input} />
                                    <ErrorMessage name="studentReligion" component="div" className="text-red-500" />
                                </div>
                                <div>
                                    <Label htmlFor="studentCast">Student Cast</Label>
                                    <Field name="studentCast" type="text" as={Input} />
                                    <ErrorMessage name="studentCast" component="div" className="text-red-500" />
                                </div>
                                <div>
                                    <Label htmlFor="aadhaarNumber">Students Aadhaar card number</Label>
                                    <Field name="aadhaarNumber" type="text" as={Input} />
                                    <ErrorMessage name="aadhaarNumber" component="div" className="text-red-500" />
                                </div>
                                <div>
                                    <Label htmlFor="aadhaarCard">Upload student Aadhaar Card</Label>
                                    <input
                                        name="aadhaarCard"
                                        type="file"
                                        className="input"
                                        onChange={(event) => {
                                            setFieldValue('aadhaarCard', event.currentTarget.files[0]);
                                        }}
                                    />
                                    <ErrorMessage name="aadhaarCard" component="div" className="text-red-500" />
                                </div>
                                <div>
                                    <Label htmlFor="motherTongue">Student Mother tongue</Label>
                                    <Field name="motherTongue" type="text" as={Input} />
                                    <ErrorMessage name="motherTongue" component="div" className="text-red-500" />
                                </div>
                                <div>
                                    <Label htmlFor="bloodGroup">Student Blood Group</Label>
                                    <Field name="bloodGroup" type="text" as={Input} />
                                    <ErrorMessage name="bloodGroup" component="div" className="text-red-500" />
                                </div>
                                <div>
                                    <Label htmlFor="currentAddress">Student Current Address</Label>
                                    <Field name="currentAddress" type="text" as={Textarea} />
                                    <ErrorMessage name="currentAddress" component="div" className="text-red-500" />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Guardian Information</CardTitle>
                            </CardHeader>
                            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="guardianName">Father / Guardian Name</Label>
                                    <Field name="guardianName" type="text" as={Input} />
                                    <ErrorMessage name="guardianName" component="div" className="text-red-500" />
                                </div>
                                <div>
                                    <Label htmlFor="guardianEmail">Father / Guardian Email (Gmail preferred)</Label>
                                    <Field name="guardianEmail" type="email" as={Input} />
                                    <ErrorMessage name="guardianEmail" component="div" className="text-red-500" />
                                </div>
                                <div>
                                    <Label htmlFor="guardianPhone">Father / Guardian Phone Number</Label>
                                    <Field name="guardianPhone" type="text" as={Input} />
                                    <ErrorMessage name="guardianPhone" component="div" className="text-red-500" />
                                </div>
                                <div>
                                    <Label htmlFor="guardianAadhaar">Father / Guardian Aadhaar Number</Label>
                                    <Field name="guardianAadhaar" type="text" as={Input} />
                                    <ErrorMessage name="guardianAadhaar" component="div" className="text-red-500" />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Mother Information</CardTitle>
                            </CardHeader>
                            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="motherName">Mother Name</Label>
                                    <Field name="motherName" type="text" as={Input} />
                                    <ErrorMessage name="motherName" component="div" className="text-red-500" />
                                </div>
                                <div>
                                    <Label htmlFor="motherPhone">Mother Phone Number</Label>
                                    <Field name="motherPhone" type="text" as={Input} />
                                    <ErrorMessage name="motherPhone" component="div" className="text-red-500" />
                                </div>
                                <div>
                                    <Label htmlFor="motherEmail">Mother Email Address</Label>
                                    <Field name="motherEmail" type="email" as={Input} />
                                    <ErrorMessage name="motherEmail" component="div" className="text-red-500" />
                                </div>
                                <div>
                                    <Label htmlFor="motherAadhaar">Mother Aadhaar Number</Label>
                                    <Field name="motherAadhaar" type="text" as={Input} />
                                    <ErrorMessage name="motherAadhaar" component="div" className="text-red-500" />
                                </div>
                                <div>
                                    <Label htmlFor="alternatePhone">Alternate phone number (Apart from the parents)</Label>
                                    <Field name="alternatePhone" type="text" as={Input} />
                                    <ErrorMessage name="alternatePhone" component="div" className="text-red-500" />
                                </div>
                            </CardContent>
                        </Card>

                        <Button type="submit" className="mt-6 w-full">Submit</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AdmissionTemp;