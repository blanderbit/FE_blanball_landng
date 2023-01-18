<template>
    <div class="b-email-form-card">
        <div class="b-email-form-card-left__side">
            <div class="b-email-form-card-left__side-title">
                {{ $t('newsEmailForm.take_care_of_updates') }}
            </div>
            <label class="b-email-form-card-left__side-input-label" for="name">
                {{ $t('newsEmailForm.subsribe_our_spam') }}</label>
            <div class="b-email-form-card-left__side-input-block">
                    <input
                    v-model="inputData" 
                    class="b-email-form-card-left__side-input" 
                    placeholder="E-mail" 
                    type="email" 
                    pattern=".+@gmail.com"
                    id="email"
                    name="name">
                <div 
                    @click="sendEmail()"
                    class="b-email-form-card-left__side-input-button"></div>
            </div>
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

export default {
    setup() {
        const inputData = ref('')

        const sendEmail = async () => {

            try {
                await HTTP.post(
                    'user/admin/get/user/email',
                    {'email': inputData.value}
                )
                inputData.value = ''
            }catch(e) {
                console.log(e)
            }
        }

        return {
            inputData,
            sendEmail,
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
            @media(max-width: 440px) {
                width: 350px;
            }
            @media(max-width: 390px) {
                width: 300px;
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
                    width: 208px;
                    height: 36px;
                    background: #FFFFFF;
                    border-radius: 6px;
                    padding: 6px 12px;
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 184%;
                    color: #8A8AA8;
                    margin-right: 10px;

                    @media(max-width: 440px) {
                        width: 170px;
                    }

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