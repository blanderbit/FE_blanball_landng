<template>
    <div class="b-email-form-card">
        <div class="b-email-form-card-left__side">
            <div class="b-email-form-card-left__side-title">
                {{ $t('newsEmailForm.take_care_of_updates') }}
            </div>
            <label class="b-email-form-card-left__side-input-label" for="name">
                {{ $t('newsEmailForm.subsribe_our_spam') }}</label>
            <div class="b-email-form-card-left__side-input-block">
                <input class="b-email-form-card-left__side-input" placeholder="E-mail" type="text" id="name"
                    name="name">
                <div class="b-email-form-card-left__side-input-button"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "assets/styles/base.scss";
.b {
    &-email-form {
        &-card {
            max-width: 400px;
            height: 152px;
            background: #EBEBFA;
            border-radius: 8px;
            padding: 15px;
            display: flex;
            justify-content: space-between;

            &-left__side {
                display: flex;
                flex-direction: column;

                &-title {
                    font-family: 'Exo 2';
                    font-weight: 700;
                    max-width: 250px;
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
                    line-height: 24px;
                    color: #8A8AA8;
                    margin-right: 10px;

                    &-block {
                        display: flex;
                    }

                    &-button {
                        padding: 6px 16px;
                        width: 56px;
                        height: 36px;
                        border-radius: 6px;
                        background: url('../assets/images/news-right-side-letter.svg') #262541;
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
                        line-height: 20px;
                        color: #575775;
                        margin: 5px 0px;
                    }
                }
            }
        }
    }
}
</style>