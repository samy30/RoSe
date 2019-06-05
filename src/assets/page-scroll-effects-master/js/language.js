$(function(){
    var menu = {ar: ['خريطة', 'مساعدة', 'اتصال', 'الإعلام'], fr: ['Carte', 'Aider', 'Contact', 'Média'], en: ['Map', 'Help', 'Contact', 'Media']};
    var menu_map = {ar: ['خريطة مجمع تجاري', 'قائمة المتاجر'], fr:['carte du centre commercial', 'liste des magasins'], en:['Mall Map', 'Stores List']};
    var menu_help = {ar: ['عرض', 'مساعدة', 'الهواتف'], fr:['présentation', 'assistance', 'téléphones'], en:['presentation', 'assistance', 'phones']};
    var menu_contact = {ar: ['معلومات الشركة', 'هاتف', 'عنوان', 'موقع الكتروني', 'البريد الإلكتروني', 'اتصل بنا'], fr:['Contact de l\'entreprise', 'téléphone', 'Adresse', 'Site Web', 'E-mail', 'appelez nous'], en:['Company Contact', 'phone', 'Address', 'Website', 'E-mail', 'Call us']};
    var menu_media = {ar: ['قصص للأطفال', 'موسيقى', 'دولة قطر', 'التالى'], fr:['Histoire enfants', 'musique', 'Qatar', 'suivante'], en:['Story Kids', 'Music', 'Qatar', 'Next']};
    var menu_media_qatar = {ar: ['السياحة', 'كأس العالم 2022', 'الابتكار', 'الخطوط الجوية'], fr:['tourisme', 'Coupe du monde 2022', 'Innovation', 'Compagnies aériennes'], en:['tourism', 'World Cup 2022', 'Innovation', 'airways']};
    var menu_media_qatar_tourism = {ar: ['لمحة عن قطر',   'مرحباً بك في قطر'], fr:['à propos du Qatar', 'endroits à visiter'], en:['AboutPages Qatar', 'Palces']};

    lang = 'fr';


    $('.go').on('click', function() {
        lang = $('input[name=radioBtns1]:checked').val();

        $('#menu0').text(menu[lang][0]);
        $('#menu1').text(menu[lang][1]);
        $('#menu2').text(menu[lang][2]);
        $('#menu3').text(menu[lang][3]);

        $('#menu_map0').text(menu_map[lang][0]);
        $('#menu_map1').text(menu_map[lang][1]);

        $('#menu_help0').text(menu_help[lang][0]);
        $('#menu_help1').text(menu_help[lang][1]);
        $('#menu_help2').text(menu_help[lang][2]);

        $('#menu_contact0').text(menu_contact[lang][0]);
        $('#menu_contact1').text(menu_contact[lang][1]);
        $('#menu_contact2').text(menu_contact[lang][2]);
        $('#menu_contact3').text(menu_contact[lang][3]);
        $('#menu_contact4').text(menu_contact[lang][4]);
        $('#menu_contact5').text(menu_contact[lang][5]);

        $('#menu_media0').text(menu_media[lang][0]);
        $('#menu_media1').text(menu_media[lang][1]);
        $('#menu_media2').text(menu_media[lang][2]);
        $('#menu_media3').text(menu_media[lang][3]);

        $('#menu_media_qatar0').text(menu_media_qatar[lang][0]);
        $('#menu_media_qatar1').text(menu_media_qatar[lang][1]);
        $('#menu_media_qatar2').text(menu_media_qatar[lang][2]);
        $('#menu_media_qatar3').text(menu_media_qatar[lang][3]);

        $('#menu_media_qatar_tourism0').text(menu_media_qatar_tourism[lang][0]);
        $('#menu_media_qatar_tourism1').text(menu_media_qatar_tourism[lang][1]);

        console.log()

    });
});