import { StudentList } from "@/components/blocks/StudentList"

 const RandomList = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold'>Random List</h1>
            <p className='text-lg mt-4'>This is a random list page</p>

            <div className='mt-4'>
                <StudentList />
            </div>
        </div>

    )
}

export default RandomList;