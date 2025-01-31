document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#translationForm');
  const targetLangSelect = document.querySelector('#target_lang');
  const sourceLangSelect = document.querySelector('#source_lang');
  const userInput = document.querySelector('#userinput');
  const outputText = document.querySelector('#output');

  // Define your languages and codes
  const languages = [
    { name: 'Acehnese (Latin script)', code: 'ace_Latn' },
    { name: 'Mesopotamian Arabic', code: 'acm_Arab' },
    { name: 'Ta’izzi-Adeni Arabic', code: 'acq_Arab' },
    { name: 'Tunisian Arabic', code: 'aeb_Arab' },
    { name: 'Afrikaans', code: 'afr_Latn' },
    { name: 'South Levantine Arabic', code: 'ajp_Arab' },
    { name: 'Akan', code: 'aka_Latn' },
    { name: 'Amharic', code: 'amh_Ethi' },
    { name: 'North Levantine Arabic', code: 'apc_Arab' },
    { name: 'Modern Standard Arabic', code: 'arb_Arab' },
    { name: 'Modern Standard Arabic (Romanized)', code: 'arb_Latn' },
    { name: 'Najdi Arabic', code: 'ars_Arab' },
    { name: 'Moroccan Arabic', code: 'ary_Arab' },
    { name: 'Egyptian Arabic', code: 'arz_Arab' },
    { name: 'Assamese', code: 'asm_Beng' },
    { name: 'Asturian', code: 'ast_Latn' },
    { name: 'Awadhi', code: 'awa_Deva' },
    { name: 'Central Aymara', code: 'ayr_Latn' },
    { name: 'South Azerbaijani', code: 'azb_Arab' },
    { name: 'North Azerbaijani', code: 'azj_Latn' },
    { name: 'Bashkir', code: 'bak_Cyrl' },
    { name: 'Bambara', code: 'bam_Latn' },
    { name: 'Balinese', code: 'ban_Latn' },
    { name: 'Belarusian', code: 'bel_Cyrl' },
    { name: 'Bemba', code: 'bem_Latn' },
    { name: 'Bengali', code: 'ben_Beng' },
    { name: 'Bhojpuri', code: 'bho_Deva' },
    { name: 'Banjar (Arabic script)', code: 'bjn_Arab' },
    { name: 'Banjar (Latin script)', code: 'bjn_Latn' },
    { name: 'Standard Tibetan', code: 'bod_Tibt' },
    { name: 'Bosnian', code: 'bos_Latn' },
    { name: 'Buginese', code: 'bug_Latn' },
    { name: 'Bulgarian', code: 'bul_Cyrl' },
    { name: 'Catalan', code: 'cat_Latn' },
    { name: 'Cebuano', code: 'ceb_Latn' },
    { name: 'Czech', code: 'ces_Latn' },
    { name: 'Chokwe', code: 'cjk_Latn' },
    { name: 'Central Kurdish', code: 'ckb_Arab' },
    { name: 'Crimean Tatar', code: 'crh_Latn' },
    { name: 'Welsh', code: 'cym_Latn' },
    { name: 'Danish', code: 'dan_Latn' },
    { name: 'German', code: 'deu_Latn' },
    { name: 'Southwestern Dinka', code: 'dik_Latn' },
    { name: 'Dyula', code: 'dyu_Latn' },
    { name: 'Dzongkha', code: 'dzo_Tibt' },
    { name: 'Greek', code: 'ell_Grek' },
    { name: 'English', code: 'eng_Latn' },
    { name: 'Esperanto', code: 'epo_Latn' },
    { name: 'Estonian', code: 'est_Latn' },
    { name: 'Basque', code: 'eus_Latn' },
    { name: 'Ewe', code: 'ewe_Latn' },
    { name: 'Faroese', code: 'fao_Latn' },
    { name: 'Fijian', code: 'fij_Latn' },
    { name: 'Finnish', code: 'fin_Latn' },
    { name: 'Fon', code: 'fon_Latn' },
    { name: 'French', code: 'fra_Latn' },
    { name: 'Friulian', code: 'fur_Latn' },
    { name: 'Nigerian Fulfulde', code: 'fuv_Latn' },
    { name: 'Scottish Gaelic', code: 'gla_Latn' },
    { name: 'Irish', code: 'gle_Latn' },
    { name: 'Galician', code: 'glg_Latn' },
    { name: 'Guarani', code: 'grn_Latn' },
    { name: 'Gujarati', code: 'guj_Gujr' },
    { name: 'Haitian Creole', code: 'hat_Latn' },
    { name: 'Hausa', code: 'hau_Latn' },
    { name: 'Hebrew', code: 'heb_Hebr' },
    { name: 'Hindi', code: 'hin_Deva' },
    { name: 'Chhattisgarhi', code: 'hne_Deva' },
    { name: 'Croatian', code: 'hrv_Latn' },
    { name: 'Hungarian', code: 'hun_Latn' },
    { name: 'Armenian', code: 'hye_Armn' },
    { name: 'Igbo', code: 'ibo_Latn' },
    { name: 'Ilocano', code: 'ilo_Latn' },
    { name: 'Indonesian', code: 'ind_Latn' },
    { name: 'Icelandic', code: 'isl_Latn' },
    { name: 'Italian', code: 'ita_Latn' },
    { name: 'Javanese', code: 'jav_Latn' },
    { name: 'Japanese', code: 'jpn_Jpan' },
    { name: 'Kabyle', code: 'kab_Latn' },
    { name: 'Jingpho', code: 'kac_Latn' },
    { name: 'Kamba', code: 'kam_Latn' },
    { name: 'Kannada', code: 'kan_Knda' },
    { name: 'Kashmiri (Arabic script)', code: 'kas_Arab' },
    { name: 'Kashmiri (Devanagari script)', code: 'kas_Deva' },
    { name: 'Georgian', code: 'kat_Geor' },
    { name: 'Central Kanuri (Arabic script)', code: 'knc_Arab' },
    { name: 'Central Kanuri (Latin script)', code: 'knc_Latn' },
    { name: 'Kazakh', code: 'kaz_Cyrl' },
    { name: 'Kabiyè', code: 'kbp_Latn' },
    { name: 'Kabuverdianu', code: 'kea_Latn' },
    { name: 'Khmer', code: 'khm_Khmr' },
    { name: 'Kikuyu', code: 'kik_Latn' },
    { name: 'Kinyarwanda', code: 'kin_Latn' },
    { name: 'Kyrgyz', code: 'kir_Cyrl' },
    { name: 'Kimbundu', code: 'kmb_Latn' },
    { name: 'Northern Kurdish', code: 'kmr_Latn' },
    { name: 'Kikongo', code: 'kon_Latn' },
    { name: 'Korean', code: 'kor_Hang' },
    { name: 'Lao', code: 'lao_Laoo' },
    { name: 'Ligurian', code: 'lij_Latn' },
    { name: 'Limburgish', code: 'lim_Latn' },
    { name: 'Lingala', code: 'lin_Latn' },
    { name: 'Lithuanian', code: 'lit_Latn' },
    { name: 'Lombard', code: 'lmo_Latn' },
    { name: 'Latgalian', code: 'ltg_Latn' },
    { name: 'Luxembourgish', code: 'ltz_Latn' },
    { name: 'Luba-Kasai', code: 'lua_Latn' },
    { name: 'Ganda', code: 'lug_Latn' },
    { name: 'Luo', code: 'luo_Latn' },
    { name: 'Mizo', code: 'lus_Latn' },
    { name: 'Standard Latvian', code: 'lvs_Latn' },
    { name: 'Magahi', code: 'mag_Deva' },
    { name: 'Maithili', code: 'mai_Deva' },
    { name: 'Malayalam', code: 'mal_Mlym' },
    { name: 'Marathi', code: 'mar_Deva' },
    { name: 'Minangkabau (Arabic script)', code: 'min_Arab' },
    { name: 'Minangkabau (Latin script)', code: 'min_Latn' },
    { name: 'Macedonian', code: 'mkd_Cyrl' },
    { name: 'Plateau Malagasy', code: 'plt_Latn' },
    { name: 'Maltese', code: 'mlt_Latn' },
    { name: 'Meitei (Bengali script)', code: 'mni_Beng' },
    { name: 'Halh Mongolian', code: 'khk_Cyrl' },
    { name: 'Mossi', code: 'mos_Latn' },
    { name: 'Maori', code: 'mri_Latn' },
    { name: 'Burmese', code: 'mya_Mymr' },
    { name: 'Dutch', code: 'nld_Latn' },
    { name: 'Norwegian Nynorsk', code: 'nno_Latn' },
    { name: 'Norwegian Bokmål', code: 'nob_Latn' },
    { name: 'Nepali', code: 'npi_Deva' },
    { name: 'Northern Sotho', code: 'nso_Latn' },
    { name: 'Nuer', code: 'nus_Latn' },
    { name: 'Nyanja', code: 'nya_Latn' },
    { name: 'Occitan', code: 'oci_Latn' },
    { name: 'West Central Oromo', code: 'gaz_Latn' },
    { name: 'Odia', code: 'ory_Orya' },
    { name: 'Pangasinan', code: 'pag_Latn' },
    { name: 'Eastern Panjabi', code: 'pan_Guru' },
    { name: 'Papiamento', code: 'pap_Latn' },
    { name: 'Western Persian', code: 'pes_Arab' },
    { name: 'Polish', code: 'pol_Latn' },
    { name: 'Portuguese', code: 'por_Latn' },
    { name: 'Dari', code: 'prs_Arab' },
    { name: 'Southern Pashto', code: 'pbt_Arab' },
    { name: 'Ayacucho Quechua', code: 'quy_Latn' },
    { name: 'Romanian', code: 'ron_Latn' },
    { name: 'Rundi', code: 'run_Latn' },
    { name: 'Russian', code: 'rus_Cyrl' },
    { name: 'Sango', code: 'sag_Latn' },
    { name: 'Sanskrit', code: 'san_Deva' },
    { name: 'Santali', code: 'sat_Olck' },
    { name: 'Sicilian', code: 'scn_Latn' },
    { name: 'Shan', code: 'shn_Mymr' },
    { name: 'Sinhala', code: 'sin_Sinh' },
    { name: 'Slovak', code: 'slk_Latn' },
    { name: 'Slovenian', code: 'slv_Latn' },
    { name: 'Slovenian', code: 'slv_Latn' },
    { name: 'Samoan', code: 'smo_Latn' },
    { name: 'Shona', code: 'sna_Latn' },
    { name: 'Sindhi', code: 'snd_Arab' },
    { name: 'Somali', code: 'som_Latn' },
    { name: 'Southern Sotho', code: 'sot_Latn' },
    { name: 'Spanish', code: 'spa_Latn' },
    { name: 'Tosk Albanian', code: 'als_Latn' },
    { name: 'Sardinian', code: 'srd_Latn' },
    { name: 'Serbian', code: 'srp_Cyrl' },
    { name: 'Swati', code: 'ssw_Latn' },
    { name: 'Sundanese', code: 'sun_Latn' },
    { name: 'Swedish', code: 'swe_Latn' },
    { name: 'Swahili', code: 'swh_Latn' },
    { name: 'Silesian', code: 'szl_Latn' },
    { name: 'Tamil', code: 'tam_Taml' },
    { name: 'Tatar', code: 'tat_Cyrl' },
    { name: 'Telugu', code: 'tel_Telu' },
    { name: 'Tajik', code: 'tgk_Cyrl' },
    { name: 'Tagalog', code: 'tgl_Latn' },
    { name: 'Thai', code: 'tha_Thai' },
    { name: 'Tigrinya', code: 'tir_Ethi' },
    { name: 'Tamasheq (Latin script)', code: 'taq_Latn' },
    { name: 'Tamasheq (Tifinagh script)', code: 'taq_Tfng' },
    { name: 'Tok Pisin', code: 'tpi_Latn' },
    { name: 'Tswana', code: 'tsn_Latn' },
    { name: 'Tsonga', code: 'tso_Latn' },
    { name: 'Turkmen', code: 'tuk_Latn' },
    { name: 'Tumbuka', code: 'tum_Latn' },
    { name: 'Turkish', code: 'tur_Latn' },
    { name: 'Twi', code: 'twi_Latn' },
    { name: 'Central Atlas Tamazight', code: 'tzm_Tfng' },
    { name: 'Uyghur', code: 'uig_Arab' },
    { name: 'Ukrainian', code: 'ukr_Cyrl' },
    { name: 'Umbundu', code: 'umb_Latn' },
    { name: 'Urdu', code: 'urd_Arab' },
    { name: 'Northern Uzbek', code: 'uzn_Latn' },
    { name: 'Venetian', code: 'vec_Latn' },
    { name: 'Vietnamese', code: 'vie_Latn' },
    { name: 'Waray', code: 'war_Latn' },
    { name: 'Wolof', code: 'wol_Latn' },
    { name: 'Xhosa', code: 'xho_Latn' },
    { name: 'Eastern Yiddish', code: 'ydd_Hebr' },
    { name: 'Yoruba', code: 'yor_Latn' },
    { name: 'Yue Chinese', code: 'yue_Hant' },
    { name: 'Chinese (Simplified)', code: 'zho_Hans' },
    { name: 'Chinese (Traditional)', code: 'zho_Hant' },
    { name: 'Standard Malay', code: 'zsm_Latn' },
    { name: 'Zulu', code: 'zul_Latn' },
  ];

  // Function to populate the dropdown options
  function populateDropdown(select, options) {
    options.forEach((option) => {
      const optionElem = document.createElement('option');
      optionElem.value = option.code;
      optionElem.text = option.name;
      select.add(optionElem);
    });
  }

  // Call the function to populate dropdown options
  populateDropdown(targetLangSelect, languages);
  populateDropdown(sourceLangSelect, [{ name: 'Auto Detect', code: 'auto' }, ...languages]);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const targetLang = targetLangSelect.value;
    const sourceLang = sourceLangSelect.value;

    try {
      // Change placeholder text to "Translating..."
      outputText.placeholder = 'Translating...';

      let sourceLanguage;

      // Check if Auto Detect is selected for source language
      if (sourceLang === 'auto') {
        const detectionResponse = await fetch('https://jikoni-tmodel.hf.space/translate_detect/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userinput: userInput.value,
            target_lang: targetLang
          })
        });

        const detectionData = await detectionResponse.json();
        sourceLanguage = detectionData.source_language;
      } else {
        sourceLanguage = sourceLang;
      }

      // Check if Auto Detect is selected for target language
      const targetLanguage = targetLang === 'auto' ? 'eng_Latn' : targetLang;

      const translationResponse = await fetch('https://jikoni-tmodel.hf.space/translate_enter/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userinput: userInput.value,
          target_lang: targetLanguage,
          source_lang: sourceLanguage
        })
      });

      const translatedText = (await translationResponse.json()).translated_text;

      // Update placeholder with the translated text
      outputText.placeholder = translatedText;

    } catch (error) {
      console.error(error);
      outputText.placeholder = 'An error occurred. Please try again.';
    }
  });
});
