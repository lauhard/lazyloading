<script>
    const copyright = ()=>{
        return  `© Andreas Lauhard, ${new Date().getFullYear()} `;
    }
</script>
<footer>
    <slot name="stock-images">

    </slot>
    <p>{copyright()}</p>
</footer>
<style>

</style>