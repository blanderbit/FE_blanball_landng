<template>
    <div class="b-404">
        <div class="b-404-content _container">
            <div class="b-404-image">
                <img src="./assets/images/404.svg" alt="404">
            </div>
            <div class="b-404-card">
                <div class="b-404-card-title">
                    Схоже, такої сторінки не існує
                </div>
                <div class="b-404-card-subtitle">
                    Поверніться, будь ласка, до головної аби продовжити
                </div>
                <RegisterButton  style="min-width: 100%;" :text="$t('buttons.register')"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.b {
    &-404 {
        margin-top: 100px;
        &-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        &-card {
            background: #FFFFFF;
            box-shadow: 2px 2px 10px rgba(56, 56, 251, 0.1);
            border-radius: 8px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-right: -500px;
            margin-top: -150px;

            @media(max-width: 900px) {
                margin-right: -400px;
                margin-top: -120px;
            }
            @media(max-width: 800px) {
                margin-right: -300px;
            }
            @media(max-width: 700px) {
                margin-top: -100px;
                margin-right: -200px;
            }

            &-title {
                font-family: 'Exo 2';
                font-weight: 700;
                font-size: 20px;
                line-height: 145%;
                color: #262541;

                @media(max-width: 900px) {
                    font-size: 18px;
                }
                @media(max-width: 700px) {
                    font-size: 16px;
                }
            }

            &-subtitle {
                font-weight: 400;
                font-size: 14px;
                line-height: 143%;
                text-align: center;
                max-width: 300px;
                color: #262541;
                margin-bottom: 10px;
                @media(max-width: 900px) {
                    font-size: 12px;
                }
                @media(max-width: 700px) {
                    font-size: 12px;
                }
            }
        }
    }
}
</style>