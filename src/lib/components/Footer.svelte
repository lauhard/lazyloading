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
    footer{
        display: flex;
        flex-direction: column;
        position: absolute;
        bottom:0;
        left:0;
        width:100%;
        padding: 0 var(--padding-side);
    }
</style>