




export const useTranslator = () =>  {

    type AvaliableLenguages = "eng" | "ru";

    const DICT: any = {

        eng: {

        },
        ru: {
            eng: {
                "турция": "turkey",
                "китай": "china",
                "пижама": "pajama",
                "халат": "robe",
                "костюм": "suit",
                "черный": "black",
                "белый": "white",
                "серый":  "gray",


        }
        }

    }


    const translator = (word: string, from: AvaliableLenguages = "eng", to: AvaliableLenguages = "eng"): string  => {

        let newWord: string = DICT[from][to][word.toLocaleLowerCase()]


        if (word[0] === word[0].toUpperCase()) {
            let newWordArr: string[] = newWord.split("")
            newWordArr[0] = newWordArr[0].toUpperCase()
            return newWordArr.join("")
        }


        return DICT[from][to][word] || word
    }


    return translator
}