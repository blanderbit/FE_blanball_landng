<template>
    <div class="b-menu">
        <ul class="b-menu__body">
            <img class="b-menu__logo" src="../assets/images/logo.svg" alt="logo"/>
            <Navigation/>
            <RegisterButton />
        </ul>
    </div>
</template>


<style lang="scss">
@import "assets/styles/base.scss";
.b {
    &-menu {
        margin-bottom: 20px;
        &__body {
            padding: 10px 0;
            align-items: center;
            display: flex;
            justify-content: space-between;
        }
        &__logo {
            padding-right: 100px;
            margin-left: 10px;
        }
    }
}
</style>