import { useSelector } from "react-redux";
import styles from './infoGraphic.module.css'

const InfoGraphic = () =>{
    const { selected } = useSelector(state =>  state.graphic);

    return(
        <div className="flex-center">
            <div className={ styles.infoContainer }>
                <div className={ styles.infoItemTitle }>Familia</div>
                { selected?.name !== '' &&  <span className={ styles.infoItem }>Padre: { selected.name }</span>}
                { selected?.children.length > 0 && <span className={ styles.infoItem }>Hijos:</span> }
                { 
                    selected?.children.length > 0 &&
                    selected?.children.map((child,index) => (
                        <span  key={`span-name-${index}`} className={ styles.infoItem }>
                            {index + 1} - { child?.name }
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default InfoGraphic;