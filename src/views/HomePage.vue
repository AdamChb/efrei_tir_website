<script>
import WelcomeEfreiTir from '@/components/WelcomeEfreiTir.vue';
import PresentationEfreiTir from '@/components/PresentationEfreiTir.vue';
import ActiviteEfreiTir from '@/components/ActiviteEfreiTir.vue';

export default {
    name: 'HomePage',
    components: {
        WelcomeEfreiTir,
        PresentationEfreiTir,
        ActiviteEfreiTir,
    }
}
</script>

<template>
    <WelcomeEfreiTir/>
    <PresentationEfreiTir/>
    <ActiviteEfreiTir/>
</template>