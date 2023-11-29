const languageStrings = {
  "en": {
    "Get Unlimited Access": "Get Unlimited Access",
    "Unlimited Art Creation": "Unlimited Art Creation",
    "Exclusive Styles": "Exclusive Styles",
    "Magic Avatars With 20% Off": "Magic Avatars With 20% Off",
    "YEARLY ACCESS": "YEARLY ACCESS",
    "BEST OFFER": "BEST OFFER",
    "Just {{price}} per year": "Just {{price}} per year",
    "WEEKLY ACCESS": "WEEKLY ACCESS",
    "{{price}} per week": "{{price}} per week",
    "Terms of Use": "Terms of Use",
    "Privacy Policy": "Privacy Policy",
    "Restore": "Restore",
    "Continue": "Continue"
  },
  "de": {
    "Get Unlimited Access": "Erhalten Sie unbegrenzten Zugriff",
    "Unlimited Art Creation": "Unbegrenzte Kunstschaffung",
    "Exclusive Styles": "Exklusive Stile",
    "Magic Avatars With 20% Off": "20 % Rabatt auf KI-Avatare",
    "YEARLY ACCESS": "JÄHRLICHER ZUGRIFF",
    "BEST OFFER": "BESTES ANGEBOT",
    "Just {{price}} per year": "Nur {{price}} pro Jahr",
    "WEEKLY ACCESS": "WÖCHENTLICHER ZUGRIFF",
    "{{price}} per week": "{{price}} pro Woche",
    "Terms of Use": "Nutzungsbedingungen",
    "Privacy Policy": "Datenschutzrichtlinie",
    "Restore": "Wiederherstellen",
    "Continue": "Weiter"
  },
  "es": {
    "Get Unlimited Access": "Obtén acceso ilimitado",
    "Unlimited Art Creation": "Ilimitada creación de arte",
    "Exclusive Styles": "Estilos exclusivos",
    "Magic Avatars With 20% Off": "20 % de descuento en avatares de IA",
    "YEARLY ACCESS": "ACCESO ANUAL",
    "BEST OFFER": "MEJOR OFERTA",
    "Just {{price}} per year": "Solo {{price}} por año",
    "WEEKLY ACCESS": "ACCESO SEMANAL",
    "{{price}} per week": "{{price}} por semana",
    "Terms of Use": "Términos de uso",
    "Privacy Policy": "Política de privacidad",
    "Restore": "Restaurar",
    "Continue": "Continuar"
  },
  "fr": {
    "Get Unlimited Access": "Obtenez un accès illimité",
    "Unlimited Art Creation": "Création artistique illimitée",
    "Exclusive Styles": "Styles exclusifs",
    "Magic Avatars With 20% Off": "20% de réduction sur les avatars IA",
    "YEARLY ACCESS": "ACCÈS ANNUEL",
    "BEST OFFER": "MEILLEURE OFFRE",
    "Just {{price}} per year": "Seulement {{price}} par an",
    "WEEKLY ACCESS": "ACCÈS HEBDOMADAIRE",
    "{{price}} per week": "{{price}} <br>par semaine",
    "Terms of Use": "Conditions d’utilisation",
    "Privacy Policy": "Politique de confidentialité",
    "Restore": "Restaurer",
    "Continue": "Continuer"
  },
  "ja": {
    "Get Unlimited Access": "無制限アクセス<br>を入手",
    "Unlimited Art Creation": "アート作品を<br>無制限に創造",
    "Exclusive Styles": "特別な<br>スタイル",
    "Magic Avatars With 20% Off": "AIアバターが<br>20%オフ",
    "YEARLY ACCESS": "年間アクセス",
    "BEST OFFER": "ベストオファー",
    "Just {{price}} per year": "わずか{{price}}/年",
    "WEEKLY ACCESS": "週ごとのアクセス",
    "{{price}} per week": "{{price}}/週",
    "Terms of Use": "利用規約",
    "Privacy Policy": "プライバシーポリシー",
    "Restore": "復元する",
    "Continue": "続行する"
  },
  "pt": {
    "Get Unlimited Access": "Obtenha Acesso Ilimitado",
    "Unlimited Art Creation": "Criação de Arte Ilimitada",
    "Exclusive Styles": "Estilos Exclusivos",
    "Magic Avatars With 20% Off": "20% de Desconto em Avatares de IA",
    "YEARLY ACCESS": "ACESSO ANUAL",
    "BEST OFFER": "MELHOR OFERTA",
    "Just {{price}} per year": "Apenas {{price}} por ano",
    "WEEKLY ACCESS": "ACESSO SEMANAL",
    "{{price}} per week": "{{price}} por semana",
    "Terms of Use": "Termos de Uso",
    "Privacy Policy": "Política de Privacidade",
    "Restore": "Restaurar",
    "Continue": "Continuar"
  }
}

const defaultLanguage = "en";
const urlParams = new URLSearchParams(window.location.search);
const currentLanguage = urlParams.get('lang') || navigator.language.substring(0, 2) || defaultLanguage;

function setLanguageText() {
  const allTextNodes = getTextNodes(document.body);
  allTextNodes.forEach(node => {
    const key = node.nodeValue.trim();
    if (key && languageStrings[currentLanguage] && languageStrings[currentLanguage][key]) {
      const text = languageStrings[currentLanguage][key];
      node.nodeValue = text;
    }
  });
}

function getTextNodes(element) {
  const textNodes = [];
  if (element.nodeType === 3) {
    textNodes.push(element);
  } else {
    element.childNodes.forEach(childNode => {
      textNodes.push(...getTextNodes(childNode));
    });
  }
  return textNodes;
}

document.addEventListener('DOMContentLoaded', setLanguageText);
window.addEventListener('popstate', setLanguageText);
