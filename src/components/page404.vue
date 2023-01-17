<template>
    <div class="b-404">
        <div class="b-404-content">
            <div class="b-404-image">
                <nuxt-img src="/images/404.svg" alt="404" />
            </div>
            <div class="b-404-card">
                <div class="b-404-card-title">
                    {{ $t('page404.title') }}
                </div>
                <div class="b-404-card-subtitle">
                    {{ $t('page404.subtitle') }}
                </div>
                <RegisterButton class="b-404-card-button" 
                :text="$t('page404.go-main')" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.b {
    &-404 {
        margin-top: 100px;

        @media(max-width: 600px) {
            margin-top: 70px;
        }

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
            margin-top: -120px;

            @media(max-width: 900px) {
                max-width: 340px;
                margin-right: -400px;
                margin-top: -110px;
            }

            @media(max-width: 800px) {
                max-width: 320px;
                margin-right: -300px;
                margin-top: -100px;
            }

            @media(max-width: 700px) {
                max-width: 280px;
                margin-top: -80px;
                margin-right: -260px;
                padding: 10px;
                padding-bottom: 15px;
            }
            @media(max-width: 600px) {
                margin-right: -220px;
                margin-top: -70px;
                max-width: 250px;
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
                @media(max-width: 600px) {
                    font-size: 14px;
                }
            }
            &-button {
                min-width: 100%;
                @media(max-width: 700px) {
                    font-size: 13px;
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
                @media(max-width: 600px) {
                    font-size: 10px;
                }
            }
        }
    }
}
</style>