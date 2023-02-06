import { HTTP } from "../main";

import { useToast } from "vue-toastification";

export const sendEmail = async (data, email) => {
    const toast = useToast();

    const { valid } = await data.validate();
    if (!valid) {
        return false;
    }

    try {
        await HTTP.post(
            'user/admin/get/user/email',
            {'email': email}
        )
        email = ''
        toast.success('fdfdfdddf')
    }catch(e) {}
}
