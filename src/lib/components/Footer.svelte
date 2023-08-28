<script>
    const copyright = ()=>{
        const copyright = `© Andreas Lauhard, ${new Date().getFullYear()} `;
        return year;
    }
</script>
<footer>
    <slot name="stock-images">

    </slot>
    <p>{copyright}</p>
</footer>
<style>

</style>