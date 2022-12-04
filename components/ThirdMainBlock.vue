<template>
    <main class="b-third__block">
        <section class="b-third__block-main-section">
            <div class="b-main-section__content _container">
                <div class="b-main-section-title">
                    <p>Відслідковуйте оцінку власної гри</p>через особистий кабінет
                </div>
                <div class="b-main-section-subtitle">
                    <p>Усі оцінки й коментарі, які вам залишать користувачі,</p>відображатимуться в особистому кабінеті
                </div>
                <div class="b-main-section-images">
                    <div class="b-main-section__iphone-image">
                        <img class="ff" src="../assets/images/Group_53.svg" alt="iphone-image" />
                    </div>
                    <div class="b-main-section__iphone-image_2">
                        <img src="../assets/images/Iphone.svg" alt="iphone-image" />
                    </div>
                </div>
            </div>
        </section>
        <section class="b-third__block-before-footer-section">
            <div class="b-before-footer-section__content _container">
                <div class="b-before-footer-section__left-side">
                    <div class="b-before-footer-section__title">
                        <p>Зберіть свою команду</p>вже сьогодні
                    </div>
                    <div class="b-before-footer-section__email-input">
                        <label class="b-before-footer-section__input-label" for="name">Електронна адреса</label>
                        <input class="b-before-footer-section__input" placeholder="E-mail" type="text" id="name"
                            name="name">
                    </div>
                </div>
                <div class="b-before-footer-section__right-side">
                    <img src="../assets/images/Frame_1472.svg" alt="" />
                </div>
            </div>
        </section>
    </main>
</template>

<script>
</script>

<style lang="scss">
@import "assets/styles/base.scss";

.b {
    &-main-section {
        &__content {
            background: url("../assets/images/Group_65.svg");
            background-position: center center;
            background-repeat: no-repeat;
            height: 1400px;
            display: block;
        }

        &-images {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 120px;
        }

        &__iphone-image {
            margin-left: 100px;
            align-self: top;
        }

        &__iphone-image_2 {
            margin-right: 100px;
            align-self: bottom;
        }

        &-title {
            font-family: 'Exo 2';
            font-style: normal;
            font-weight: 700;
            font-size: 56px;
            line-height: 137%;
            text-align: center;
            color: &font-color;
            margin: 70px 0px 25px 0px;

            @media(max-width: $md2) {
                font-weight: 800;
                font-size: 42px;
                margin: 50px 0px 10px 0px;
            }

            @media(max-width: $md3) {
                font-weight: 800;
                font-size: 32px;
                margin: 50px 0px 10px 0px;
            }
        }

        &-subtitle {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            color: #575775;

        }
    }

    &-before-footer-section {
        &__content {
            padding: 40px 40px 52px;
            border-radius: 24px;
            margin-top: -200px;
            max-height: 316px;
            display: flex;
            justify-content: space-between;
            background: url("../assets/images/Group_69.svg"), #262541;
        }

        &__right-side {
            align-self: flex-end;
        }

        &__title {
            font-family: 'Exo 2';
            font-style: normal;
            font-weight: 700;
            font-size: 48px;
            line-height: 133%;
            color: #FFFFFF;
            margin-bottom: 25px;

            @media(max-width: $md2) {
                font-size: 34px;
                margin-bottom: 20px;
            }

            @media(max-width: $md3) {
                font-size: 32px;
                margin-bottom: 20px;
            }
        }

        &__email-input {
            display: inline-flex;
            flex-direction: column;
        }

        &__input {
            padding: 12px 8px;
            border: 1px solid #C5C5D3;
            border-radius: 8px;
            background-color: transparent;
            width: 300px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 140%;
            color: #C5C5D3;

            &-label {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 500;
                font-size: 15px;
                line-height: 20px;
                color: #FFFFFF;
                margin-bottom: 10px;

                @media(max-width: $md2) {
                    font-size: 14px;
                }
            }
        }
    }
}
</style>