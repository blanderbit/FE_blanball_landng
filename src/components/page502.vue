<template>
    <div class="b-502">
        <div class="b-502-content">
            <div class="b-502-image">
                <nuxt-img src="images/502.svg" alt="502" />
            </div>
            <div class="b-502-card">
                <div class="b-502-card-title">
                    {{ $t('page502.title') }}
                </div>
                <div class="b-502-card-subtitle">
                    {{ $t('page502.subtitle') }}
                </div>
                <RegisterButton 
                    :path="'/'"
                    class="b-502-card-button"
                    :text="$t('page502.reload-page')" />
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.b {
    &-502 {
        &-content {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        &-card {
            background: #FFFFFF;
            box-shadow: 2px 2px 10px rgba(56, 56, 251, 0.1);
            border-radius: 8px;
            padding: 20px;
            max-width: 300px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: -150px;
            margin-right: -75px;

            @media(max-width: 800px) {
                max-width: 270px;
                padding: 15px;
                margin-top: -120px;
            }

            @media(max-width: 700px) {
                max-width: 250px;
                margin-right: -65px;
                margin-top: -100px;
            }

            &-button {
                min-width: 100%;
                font-size: 13px;
            }

            &-title {
                font-family: 'Exo 2';
                font-weight: 700;
                font-size: 22px;
                line-height: 145%;
                color: #262541;
                @media(max-width: 800px) {
                    font-size: 20px;
                }

                @media(max-width: 700px) {
                    font-size: 18px;
                }

            }

            &-subtitle {
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 143%;
                text-align: center;
                color: #575775;
                margin: 5px 0px 10px 0px;

                @media(max-width: 800px) {
                    font-size: 13px;
                }

                @media(max-width: 700px) {
                    font-size: 12px;
                }
            }
        }
    }
}
</style>