import { getSchoolData, updateSchoolData, addSchoolData } from '../../services/firebase/schoolService';

const schoolSlice = (set) => ({
    schoolData: {
        id: '',
        name: '',
        short_name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        phone: '',
        email: '',
        website: '',
        academic_year: '',
        session_start: '',
        session_end: '',
        logo_url: '',
        loading: false,
        error: null,
    },

    setSchoolData: (data) => {
        const schoolData = {
            id: data.id || data.school_id || '',
            name: data.school_name || data.name || '',
            short_name: data.short_name || data.school_short_name || '',
            address: data.address || data.school_address || '',
            city: data.city || '',
            state: data.state || '',
            zip: data.zip || data.pinCode || '',
            country: data.country || '',
            phone: data.phone || '',
            email: data.email || '',
            website: data.website || '',
            academic_year: data.academic_year || '',
            session_start: data.session_start || '',
            session_end: data.session_end || '',
            logo_url: data.logo_url || data.school_logo || '',

        };

        set((state) => ({

            schoolData: {
                ...state.schoolData,
                ...schoolData,
                loading: false,
                error: null
            }
        }))
    },


    fetchSchoolData: async () => {
        set((state) => ({
            schoolData: { ...state.schoolData, loading: true, error: null }
        }));
        try {
            const data = await getSchoolData();
            set((state) => ({
                schoolData: { ...state.schoolData, ...data, loading: false }
            }));
        } catch (error) {
            set((state) => ({
                schoolData: { ...state.schoolData, error: error.message, loading: false }
            }));
        }
    },

    updateSchoolData: async (data) => {
        set((state) => ({
            schoolData: { ...state.schoolData, loading: true, error: null }
        }));
        try {
            await updateSchoolData(data);
            set((state) => ({
                schoolData: { ...state.schoolData, ...data, loading: false }
            }));
        } catch (error) {
            set((state) => ({
                schoolData: { ...state.schoolData, error: error.message, loading: false }
            }));
        }
    },

    addSchoolData: async (data) => {
        set((state) => ({
            schoolData: { ...state.schoolData, loading: true, error: null }
        }));
        try {
            await addSchoolData(data);
            set((state) => ({
                schoolData: { ...state.schoolData, ...data, loading: false }
            }));
        } catch (error) {
            set((state) => ({
                schoolData: { ...state.schoolData, error: error.message, loading: false }
            }));
        }
    }
});

export default schoolSlice;
