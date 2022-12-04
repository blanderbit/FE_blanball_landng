<template>
    <a href="http://178.151.201.167:49201/authentication/register">Зареєструватися</a>
</template>

<style lang="scss" scoped>
@import "assets/styles/base.scss";
a {
    display: inline-flex;
    align-items: center;
    padding: 8px 16px;
    margin-right: 20px;
    background: #148783;
    border-radius: 8px;
    transition: background-color 0.4s ease 0s;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
    @media(min-width: $md2) {
        &:hover {
            background-color: #1da19d;
            cursor: pointer;
        }
    }
}
</style>