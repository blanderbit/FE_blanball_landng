<template>
    <div class="b-502">
        <div class="b-502-content">
            <div class="b-502-image">
                <img src="../assets/images/502.svg" alt="502">
            </div>
            <div class="b-502-card">
                <div class="b-502-card-title">
                    {{ $t('page502.title') }}
                </div>
                <div class="b-502-card-subtitle">
                    {{ $t('page502.subtitle') }}
                </div>
                <RegisterButton 
                    style="min-width: 100%;"
                    :path="'/'"
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
            margin-right: -70px;

            &-title {
                font-family: 'Exo 2';
                font-weight: 700;
                font-size: 22px;
                line-height: 145%;
                color: #262541;
                @media(max-width: 790px) {
                    font-size: 20px;
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
                @media(max-width: 790px) {
                    font-size: 12px;
                }
            }
        }
    }
}
</style>