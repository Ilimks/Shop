"use client"
import universalStyles from "@/shared/styles/universalStyles.module.scss";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import { FilterAside } from '@/features/productFilter/ui/FilterAside/FilterAside';
import {CatalogTitle} from "@/features/catalog/ui/CatalogTitle/CatalogTitle";
import {CatalogContent} from "@/features/catalog/ui/CatalogContent/CatalogContent";


const CatalogPage = () => {







    return(
        <main>
            <Breadcrumbs />
            <div className={universalStyles.container}>
                <div className={universalStyles.pageComposition}>
                    <FilterAside />
                    <div className={universalStyles.pageContent}>
                        <CatalogTitle />
                        <CatalogContent/>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default CatalogPage