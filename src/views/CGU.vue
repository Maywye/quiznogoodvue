<template>
    <main class="grid justify-center w-full h-auto bg-[#F9F4F5] border-gray-200 py-2.5 m-10 rounded-lg md:m-20 md:grid-cols-12">
        <div class="col-start-1 md:col-span-4 md:my-10 md:border-r-2">
            <div class="grid grid-cols-1 text-center md:m-5 ">
                <h3 @click="Toggle(0)" class="p-3 sourceCodeB cursor-pointer hover:text-[#C8B8DB] hover:underline md:p-10 lg:text-2xl">Informations générales</h3>
                <span class="mx-16 border-b-2"></span>
                <h3 @click="Toggle(1)" class="p-3 sourceCodeB cursor-pointer hover:text-[#C8B8DB] hover:underline md:p-10 lg:text-2xl">Mentions légales</h3>
                <span class="mx-16 border-b-2"></span>
                <h3 @click="Toggle(2)" class="p-3 sourceCodeB cursor-pointer hover:text-[#C8B8DB] hover:underline md:p-10 lg:text-2xl">Conditions générales d'utilisation</h3>
                <span class="mx-16 border-b-2"></span>
                <h3 @click="Toggle(3)" class="p-3 sourceCodeB cursor-pointer hover:text-[#C8B8DB] hover:underline md:p-10 lg:text-2xl">Vos données personnelles</h3>
            </div>
        </div>
        <div class="col-start-1 p-3 md:col-start-6 md:col-span-6">
            <div class="grid grid-cols-1 my-6 md:my-24">
                <div v-show="show == 0">
                    <h4 class="underline sourceCodeB text-md mb-5 md:text-2xl ">Informations générales</h4>
                    <div class="break-words text-sm md:text-lg">
                        <p class="mb-2 md:mb-5">Ce site à été créé part 3 stagiaires de la formation <strong>POEC Développeur Front-End</strong> dispensé part <strong> <a href="https://www.dawan.fr/" target="_blank">Dawan </a><a href="https://fr.wikipedia.org/wiki/Toulouse" target="_blank">Toulouse</a></strong>.</p>
                        <p class="mb-2 md:mb-5">Vous avez la possibilité de retrouver nos informations sur la page : <router-link class="hover:text-[#C8B8DB] underline" to="AboutUs">A propos</router-link></p>
                        <p class="mb-2 md:mb-5">Il n'a pas pour but d'être commercialisé ou de générer des fonds.</p>
                        <p class="mb-5">Vous pouvez obtenir le code source directement sur :</p>
                        <p class="flex md:mb-5"><strong><a href="https://github.com/Maywye/quiznogoodvue" target="_blank"> Github</a></strong> &ensp;
                            <a href="https://github.com/Maywye/quiznogoodvue" target="_blank"><img class="w-6 h-6 md:w-10 md:h-10" src="../../public/assets/img/github.png" alt="github logo-link" ></a></p>
                    </div>
                </div>
                <div v-show="show == 1">
                    <h4 class="underline sourceCodeB md:text-2xl mb-5">Mentions légales</h4>
                    <div class="break-words text-sm md:text-lg">
                        <p class="mb-2 md:mb-5">Ce site est sous la responsabilité de Quiznogood
                            <br>
                            Nous n'avons pas encore de siège social
                        </p>
                        <p class="mb-2 md:mb-5">
                            Editeur : <span class="font-bold">IznoTeam</span>
                            <br>
                            Exploitation : <span class="font-bold">IznoTeam</span>
                            <br>
                            Conception : <span class="font-bold">IznoTeam</span>
                            <br>
                            Hébergeur : <span class="font-bold">IznoTeam</span>
                        </p>
                        <p class="mb-2 font-bold md:mb-5" >Coordonnées : </p>
                        <ul class="list-disc list-inside mb-2 bold md:mb-5">
                            <li>Par courrier :</li>
                            <li>Par téléphone : </li>
                            <li>Par email : quiznogood@gmail.com</li>
                        </ul>

                        <p class="mb-2 font-bold underline md:mb-5">Tous droits d'auteur des textes et oeuvres réservés.</p>

                        <p class="mb-2 md:mb-5">La IznoTeam ne garantit en aucune façon l'exactitude, la précision, l'exhaustivité ou l'adéquation, des informations mises à disposition sur ses sites, y compris l'ensemble des liens hypertextes ou toute autre liaison informatique utilisée, directement ou inderectement, à partir de ce site.</p>

                        <p class="mb-2 md:mb-5">Ce site est protégé par le droit d'auteur. L'usage de tout ou partie de ce site, notamment par téléchargement, reproduction, transmission ou représentation sur tous supports et par tous procédés, à d'autres fins que pour usage personnel et privé dans un but non commercial est strictement interdit. </p>

                        <p class="mb-2 md:mb-5">Les dénominations sociales, marques et signes distinctifs reproduits sur ce site sont également protégés au titre du droit des marques. La reproduction ou la représentation de tout ou partie d'un des signes précités doit faire l'objet d'une autorisation écrite préalable des titulaires des marques et signes.</p>

                        <p class="mb-2 md:mb-5">De façon générale, toute reproduction ou représentation non autorisée de marques, logos, dessins, modèles, d'œuvres littéraires, musicales, audiovisuelles, photographiques et plus généralement de tout élément susceptible d'être protégé par un droit de propriété intellectuelle accessible sur ce site est interdite et constituerait une contrefaçon au sens des articles L335-2 et suivants du Code de la Propriété Intellectuelle, à moins que cette reproduction ou représentation ne soit exclusivement réservée à un usage strictement personnel et privé dans un but non commercial.</p>
                    </div>
                </div>
                <div v-show="show == 2">
                    <h5 class="underline sourceCodeB md:text-2xl mb-5">Conditions générales d'utilisation</h5>
                    <div class="break-words text-sm md:text-lg">
                        <p class="mb-2 md:mb-5">Les présentes conditions générales d'utilisation (dites « CGU ») ont pour objet l'encadrement juridique des modalités de mise à disposition du site et des services par " " et de définir les conditions d'accès et d'utilisation des services par « l'Utilisateur ». Les présentes CGU sont accessibles sur le site à la rubrique «CGU». Toute inscription ou utilisation du site implique l'acceptation sans aucune réserve ni restriction des présentes CGU par l'utilisateur. Lors de l'inscription sur le site via le Formulaire d'inscription, chaque utilisateur accepte expressément les présentes CGU en cochant la case précédant le texte suivant : « Je reconnais avoir lu et compris les CGU et je les accepte ». En cas de non-acceptation des CGU stipulées dans le présent contrat, l'Utilisateur se doit de renoncer à l'accès des services proposés par le site. <strong>Quiznogood</strong> se réserve le droit de modifier unilatéralement et à tout moment le contenu des présentes CGU.</p>
                        <h5 class="underline sourceCodeB text-md mb-2 md:text-xl md:mb-5">ARTICLE 1 : Les mentions légales</h5>
                        <p class="mb-2 md:mb-5">L'édition et la direction de la publication du site quiznogood est assurée par Quiznoteam, domicilié 1 place occitane 31000 Toulouse. <br> Adresse e-mail quiznogood@gmail.com.</p>
                        <h5 class="underline sourceCodeB text-md mb-2 md:text-xl md:mb-5">ARTICLE 2 : Accès au site</h5>
                        <p class="mb-2 md:mb-5">Le site quiznogood permet à l'Utilisateur un accès gratuit aux services suivants :</p>
                        <ul class="list-disc list-inside mb-2 bold md:mb-5">
                            <li>Réalisation de quizz</li>
                        </ul>
                        <p>Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge. L'Utilisateur non membre n'a pas accès aux services réservés. Pour cela, il doit s'inscrire en remplissant le formulaire. En acceptant de s'inscrire aux services réservés, l'Utilisateur membre s'engage à fournir des informations sincères et exactes concernant son état civil et ses coordonnées, notamment son adresse email.</p>
                        <p class="mb-2 md:mb-5">Pour accéder aux services, l'Utilisateur doit ensuite s'identifier à l'aide de son identifiant et de son mot de passe qui lui seront communiqués après son inscription. 
                        Tout Utilisateur membre régulièrement inscrit pourra également solliciter sa désinscription en se rendant à la page dédiée sur son espace personnel. Celle-ci sera effective dans un délai raisonnable. Tout événement dû à un cas de force majeure ayant pour conséquence un dysfonctionnement du site ou serveur et sous réserve de toute interruption ou modification en cas de maintenance, n'engage pas la responsabilité de quiznogood. Dans ces cas, l'Utilisateur accepte ainsi ne pas tenir rigueur à l'éditeur de toute interruption ou suspension de service, même sans préavis. L'Utilisateur a la possibilité de contacter le site par messagerie électronique à l'adresse email de l'éditeur communiqué à <span class="font-bold">l'ARTICLE 1</span>.</p>
                        <h5 class="underline sourceCodeB text-md mb-2 md:text-xl md:mb-5">ARTICLE 3 : Collecte des données</h5>
                        <p class="mb-2 md:mb-5">Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés. Le site est déclaré à la CNIL sous le numéro 0000. En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur exerce ce droit : 
                            via un formulaire de contact</p>
                        <h5 class="underline sourceCodeB text-md mb-2 md:text-xl md:mb-5">ARTICLE 4 : Propriété intellectuelle</h5>
                        <p class="mb-2 md:mb-5">Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…) font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur. L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement privé, toute utilisation à des fins commerciales et publicitaires est strictement interdite. Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l'autorisation expresse de l'exploitant du site Internet constituerait une contrefaçon sanctionnée par l'article L 335-2 et suivants du Code de la propriété intellectuelle. Il est rappelé conformément à l'article L122-5 du Code de propriété intellectuelle que l'Utilisateur qui reproduit, copie ou publie le contenu protégé doit citer l'auteur et sa source.</p>
                        <h5 class="underline sourceCodeB text-md mb-2 md:text-xl md:mb-5">ARTICLE 5 : Responsabilité</h5>
                        <p class="mb-2 md:mb-5">Les sources des informations diffusées sur le site quiznogood sont réputées fiables mais le site ne garantit pas qu'il soit exempt de défauts, d'erreurs ou d'omissions. Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle. Malgré des mises à jour régulières, le site quiznogood ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication. De même, le site ne peut être tenue responsable de l'utilisation et de l'interprétation de l'information contenue dans ce site. L'Utilisateur s'assure de garder son mot de passe secret. Toute divulgation du mot de passe, quelle que soit sa forme, est interdite. Il assume les risques liés à l'utilisation de son identifiant et mot de passe. Le site décline toute responsabilité. Le site quiznogood ne peut être tenu pour responsable d'éventuels virus qui pourraient infecter l'ordinateur ou tout matériel informatique de l'Internaute, suite à une utilisation, à l'accès, ou au téléchargement provenant de ce site. La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers.</p>
                        <h5 class="underline sourceCodeB text-md mb-2 md:text-xl md:mb-5">ARTICLE 6 : Liens hypertextes</h5>
                        <p class="mb-2 md:mb-5">Des liens hypertextes peuvent être présents sur le site. L'Utilisateur est informé qu'en cliquant sur ces liens, il sortira du site quiznogood. Ce dernier n'a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.</p>
                        <h5 class="underline sourceCodeB text-md mb-2 md:text-xl md:mb-5">ARTICLE 7 : Cookies</h5>
                        <p class="mb-2 md:mb-5">L'Utilisateur est informé que lors de ses visites sur le site, un cookie peut s'installer automatiquement sur son logiciel de navigation. Les cookies sont de petits fichiers stockés temporairement sur le disque dur de l'ordinateur de l'Utilisateur par votre navigateur et qui sont nécessaires à l'utilisation du site quiznogood. Les cookies ne contiennent pas d'information personnelle et ne peuvent pas être utilisés pour identifier quelqu'un. Un cookie contient un identifiant unique, généré aléatoirement et donc anonyme. Certains cookies expirent à la fin de la visite de l'Utilisateur, d'autres restent. L'information contenue dans les cookies est utilisée pour améliorer le site quiznogood. En naviguant sur le site, L'Utilisateur les accepte. L'Utilisateur doit toutefois donner son consentement quant à l'utilisation de certains cookies. A défaut d'acceptation, l'Utilisateur est informé que certaines fonctionnalités ou pages risquent de lui être refusées. L'Utilisateur pourra désactiver ces cookies par l'intermédiaire des paramètres figurant au sein de son logiciel de navigation.</p>
                        <h5 class="underline sourceCodeB text-md mb-2 md:text-xl md:mb-5">ARTICLE 8 : Droit applicable et juridiction compétente</h5>
                        <p class="mb-2 md:mb-5">La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître. Pour toute question relative à l'application des présentes CGU, vous pouvez joindre l'éditeur aux coordonnées inscrites à <span class="font-bold">l'ARTICLE 1</span>.</p>
                    </div>

                </div>
                <div v-show="show == 3">
                    <h4 class="underline sourceCodeB md:text-2xl md:mb-5">Vos données personnelles</h4>
                    <h5 class="text-md md:text-xl mb-5">Procédure à suivre pour formuler une demande relative à vos données à caractère personnel que nous avons collectées.</h5>
                    <div class="text-sm md:text-lg">
                        <p class="mb-2 md:mb-5">Afin que nous puissions répondre à votre demande merci de nous contacter via notre formulaire de contact que vous trouverez <router-link class="underline hover:text-[#C8B8DB]" to="contact">ici</router-link> ou en bas de page</p>
                        <p class="mb-2 md:mb-5">Dans le formulaire de contact, merci de préciser la raison de votre demande : </p>
                        <ul class="list-disc list-inside mb-2 bold md:mb-5">
                            <li>Droit d'accès - <a class="underline hover:text-[#C8B8DB]" href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3#Article15" target="_blank"> Article 15</a></li>
                            <li>Droit de rectification - <a class="underline hover:text-[#C8B8DB]" href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3#Article16" target="_blank"> Article 16</a></li>
                            <li>Droit à l'effacement - <a class="underline hover:text-[#C8B8DB]" href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3#Article17" target="_blank"> Article 17</a></li>
                            <li>Droit à l'opposition - <a class="underline hover:text-[#C8B8DB]" href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3#Article21" target="_blank">Article 21</a></li>
                            <li>Autre demande – <a class="underline hover:text-[#C8B8DB]" href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3#Article18" target="_blank">Articles 18 à 20 et 22</a></li>
                        </ul>
    
                        <p class="font-bold mb-5">Nous reviendrons vers vous via e-mail dans les plus bref delais.</p>
                        <h5 class="sourceCodeB text-[#502F4C] mb-5 text-xl md:text-2xl">IznoTeam</h5>
                    </div>
                    

                    <p class="italic mb-2 text-sm md:text-md md:mb-5">Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Européen sur la Protection des Données 2016/679 (RGPD), vous disposez d'un droit d'interrogation, d'accès, de rectification, d'effacement, d'opposition pour motifs légitimes, de limitation et de portabilité relativement à l'ensemble des données ainsi que du droit de formuler des directives spécifiques et générales concernant la conservation, l'effacement et la communication de vos données post-mortem.</p>
                    <p></p>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    name: 'CGU',
    data() {
        return {
            show:0
        }
    },
    methods:{
        Toggle(x){
            this.show = x
        }
    }
}
</script>
<style>    
</style>