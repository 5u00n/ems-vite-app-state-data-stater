import { create } from 'zustand';
import { persist, createJSONStorage, devtools } from 'zustand/middleware';
import authSlice from './auth/authSlice';
import usersSlice from './users/usersSlice'; // Import other slices as needed
import profileSlice from './profile/profileSlice';
import schoolSlice from './school/schoolSlice';
import attendanceSlice from './attendance/attendanceSlice';
import notificationSlice from './notification/notificationSlice';
import academicsSlice from './academics/academicsSlice';

import feesSlice from './fees/feesSlice';
import looksSlice from './looks/looksSlice';
import connectivitySlice from './connectivity/connectivitySlice';
//import testSlice from './tests/testSlice';


const useStore =
    create(
        devtools(
            persist(
                (...a) => ({
                    ...authSlice(...a),
                    ...profileSlice(...a),
                    ...schoolSlice(...a),
                    ...looksSlice(...a),
                    ...connectivitySlice(...a),
                    // }
                    // )
                    // withSlices(
                    //     testSlice, 
                    // authSlice,
                    // school: schoolSlice,
                    // attendance: attendanceSlice,
                    // notification: notificationSlice,
                    // academics: academicsSlice,
                    // fees: feesSlice,
                    // Track Internet Status

                }),
                {
                    name: "school-app-store",
                    storage: createJSONStorage(() => localStorage),
                }
            )
        )
    );

export default useStore;