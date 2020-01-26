<template>
    <div class="fullheight">
        <div class="content">
            <transition
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
                appear
            >
                <nuxt />
            </transition>
        </div>
    </div>
</template>

<style>
    h1{
        margin-bottom: 24px;
    }
	.fullheight {
		height: 100vh;
		display: flex;
		align-items: center;
		overflow-x: hidden
	}
	.content {
		max-width: 560px;
        width: 100%;
		margin: 0 auto;
	}
</style>
