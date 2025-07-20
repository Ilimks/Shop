




export const useTranslator = () =>  {

    type AvaliableLenguages = "eng" | "ru" | "kg";

    const DICT: any = {

        eng: {
            ru: {
                "yellow": "желтый",
                "black": "чёрный",
                "white": "белый",
                "green": "зеленый",
                "orange": "оранжевый",
            }
        },
        ru: {
            eng: {
                "турция": "turkey",
                "китай": "china",
                "пижама": "pajama",
                "кыргызстан": "kyrgyzstan",
                "халат": "robe",
                "костюм": "suit",
                "черный": "black",
                "белый": "white",
                "серый":  "gray",


        }
        }

    }

    const translator = (word: string, from: AvaliableLenguages = "eng", to: AvaliableLenguages = "eng"): string  => {


        let newWord: string = DICT[from][to][word.toLowerCase()]


        if (word[0] === word[0].toUpperCase()) {

            let newWordArr: string[] = newWord.split("")
            newWordArr[0] = newWordArr[0].toUpperCase()
            return newWordArr.join("")
        }


        return DICT[from][to][word] || word
    }


    return translator
}