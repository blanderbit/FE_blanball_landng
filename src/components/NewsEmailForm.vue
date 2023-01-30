<template>
    <div class="b-email-form-card">
        <div class="b-email-form-card-left__side">
            <div class="b-email-form-card-left__side-title">
                {{ $t('newsEmailForm.take_care_of_updates') }}
            </div>
            <label class="b-email-form-card-left__side-input-label" for="name">
                {{ $t('newsEmailForm.subsribe_our_spam') }}</label>
            <Form
                v-slot="data" 
                @submit="disableSubmit" 
                :validation-schema="schema"
                class="b-email-form-card-left__side-input-block">
                <InputComponent
                    style="margin-right: 10px;"
                    v-model="inputData"
                    :height="36"
                    :width="208"
                    placeholder="E-mail"
                    name="email"/>
                <div
                    @click="sendEmail(data)"
                    class="b-email-form-card-left__side-input-button">
                </div>
            </Form>
        </div>
        <div 
            class="b-email-form-card-right__side">
            <img 
                src="/images/news-first-block-left.svg" 
                alt="news-first-block-left" />
        </div>
    </div>
</template>

<script>
import { HTTP } from "../main";

import { useToast } from "vue-toastification";
import { useI18n } from "vue-i18n";

import { Form } from "@system.it.flumx.com/vee-validate";

import isEmailValidator from 'validator/lib/isEmail';

import * as yup from "yup";


export default {
    components: {
        Form,
    },
    setup() {
        const inputData = ref('')
        const toast = useToast()
        const { t } = useI18n();

        const schema = yup.object({
            email: yup
                .string()
                .required('errors.email-required')
                .test("is-valid", 
                    (message) => 'errors.email-invalid', 
                    (value) => value 
                    ? isEmailValidator(value) 
                    : new yup.ValidationError('errors.email-invalid')),
        });


        const sendEmail = async (data) => {
            const { valid } = await data.validate();
            if (!valid) {
                return false;
            }

            try {
                await HTTP.post(
                    'user/admin/get/user/email',
                    {'email': inputData.value}
                )
                inputData.value = ''
                toast.success(t('newsEmailForm.email-sended-success'))
            }catch(e) {}
        }

        return {
            inputData,
            sendEmail,
            schema,
            disableSubmit: () => {
                e.stopPropagation();
                e.preventDefault();
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/base.scss";
.b {
    &-email-form {
        &-card {
            width: 400px;
            background: #EBEBFA;
            border-radius: 8px;
            padding: 15px;
            display: flex;
            justify-content: space-between;

            @media(max-width: 1050px) and (min-width: $md3) {
                width: 300px;
            }
            @media(max-width: 550px) {
                width: 100%;
            }
            &-right__side {
                @media(max-width: 390px) {
                    display: none;
                }
            }
            &-left__side {
                display: flex;
                flex-direction: column;

                &-title {
                    font-family: 'Exo 2';
                    font-weight: 700;
                    max-width: 180px;
                    font-size: 16px;
                    line-height: 150%;
                    color: #262541;

                }

                &-input {
                    &-block {
                        display: flex;
                    }

                    &-button {
                        padding: 6px 16px;
                        width: 56px;
                        height: 36px;
                        border-radius: 6px;
                        background: url('/images/news-right-side-letter.svg') #262541;
                        background-position: center;
                        background-repeat: no-repeat;
                        transition: background-color 0.3s ease 0s;

                        @media(min-width: $md2) {
                            &:hover {
                                background-color: #1da19d;
                                cursor: pointer;
                            }
                        }
                    }

                    &-label {
                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 133%;
                        color: #575775;
                        margin: 5px 0px;
                        max-width: 220px;
                        @media(max-width: 440px) {
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }
}
</style>