import { FiHome, FiInbox, FiFileText, FiBook } from 'react-icons/fi'

import styles from './styles.module.scss';

export function Sidebar() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
              <a href="http://localhost:3000">Logo</a>
            </div>
            <div className={styles.navItens}>
              <ul>
                <li>
                  <a href="http://localhost:3000"><FiHome color="#5e72e4" size={20} /> <span>Dashboard</span></a>
                </li>
                <li>
                  <a href="http://localhost:3000/types"><FiInbox color="#ffd600" size={20} /> <span>Types</span></a>
                </li>
                <li>
                  <a href="http://localhost:3000/months"><FiBook color="#ffd600" size={20} /> <span>Months</span></a>
                </li>
                <li>
                  <a href="http://localhost:3000/transactions"><FiFileText color="#ffd600" size={20} /> <span>Transactions</span></a>
                </li>
              </ul>
            </div>
        </div>
    )
}
