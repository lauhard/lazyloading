<script>
    export let className = "";
    const copyright = ()=>{
        return  `© Andreas Lauhard, ${new Date().getFullYear()} `;
    }
</script>
<footer class="{className}">
    <ul >
        <p class="mb1">Images provided from:</p>
        <li>
            <a href="https://unsplash.com/de/@l_oan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Loan</a> auf <a href="https://unsplash.com/de/fotos/7AIDE8PrvA0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </li>
        <li>
            <a href="https://unsplash.com/de/@raouldroog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Raoul Droog</a> auf <a href="https://unsplash.com/de/fotos/yMSecCHsIBc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </li>
        <li>
            <a href="https://unsplash.com/de/@lettherebelight?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alex D.</a> auf <a href="https://unsplash.com/de/fotos/J93PXpBPCFI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </li>
    </ul>
    <p class="legal-notice">{copyright()}</p>
</footer>
<style lang="scss">
    footer{
        display: flex;
        flex-direction: column;
        position: absolute;
        bottom:0;
        left:0;
        width:100%;
        background: rgb(20, 19, 19);
        z-index: 999;
        padding: 1rem;
        height: 13rem;

		ul{
			padding: var(--padding-side);
            p{
                font-size: 1.3rem;
                font-weight: bold;
            }
            li,a{
                font-size: 1.1rem;
            }
		}
       .legal-notice{
            padding-left: var(--padding-side);
            font-size: 1.1rem;
       }
    }
</style>