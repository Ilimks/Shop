import { SearchWithHistory } from '@/widgets/header/ui/SearchWithHistory/SearchWithHistory'
import styles from './InputSection.module.scss'


export const InputSection: React.FC = () => {
    return (
        <section className={styles.inputSection}>
            <div className="container">
                <div className={styles.inputSection__box}>
                    <SearchWithHistory
                      inputProps={{
                        placeholder: "Поиск...",
                        variant: "headerSearch2",
                        inputSize: "headerSearchSize2",
                      }} 
                    />
                </div>
            </div>
        </section>
    )
}