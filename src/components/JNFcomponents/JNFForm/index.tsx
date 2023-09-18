import React from 'react'
import styles from './JNFForm.module.scss'

export default function Dekstop1() {
  return (
    <div className={styles.form_comp}>
      <div className={`${styles.row_1} ${styles.main_heading}`}>
        <div className={`${styles.col} ${styles.col_1}`}>Sr No.</div>
        <div className={styles.col}>Programs offered</div>
        <div className={`${styles.col_3}`}>
          <div className={`${styles.row}`}>
            <div className={styles.col_3_1}>Specialisation</div>
            <div className={styles.col_3_2}>Yes/No</div>
          </div>
        </div>
      </div>

      <div className={`${styles.row_1} ${styles.odd}`}>
        <div className={`${styles.col} ${styles.col_1}`}>1</div>
        <div className={styles.col}>B. Tech. disciplines to be considered (4-year course)</div>
        <div className={`${styles.col_3}`}>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>Computer Science & Engineering</div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>Chemical Engineering</div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>Material Science & Engineering</div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.row_1} ${styles.even}`}>
        <div className={`${styles.col} ${styles.col_1}`}>2</div>
        <div className={styles.col}>Dual Degree (5-year course)</div>
        <div className={`${styles.col_3}`}>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>Computer Science & Engineering</div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>Electronics & Communication Engineering</div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.row_1} ${styles.odd}`}>
        <div className={`${styles.col} ${styles.col_1}`}>3</div>
        <div className={styles.col}>B.Arch (5-year course)</div>
        <div className={`${styles.col_3}`}>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>Architecture</div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.row_1} ${styles.even}`}>
        <div className={`${styles.col} ${styles.col_1}`}>4</div>
        <div className={styles.col}>M.Arch (2-year course)</div>
        <div className={`${styles.col_3}`}>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>Sustainable Architecture</div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.row_1} ${styles.odd}`}>
        <div className={`${styles.col} ${styles.col_1}`}>5</div>
        <div className={styles.col}>M.Tech (2-year course)</div>
        <div className={`${styles.col_3}`}>
          <div className={`${styles.row}`}>
            <div className={`${styles.dept_heading}`}>Civil Engineering</div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>Environment</div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>Geotechnical</div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>Structures</div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>Transportation</div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>Water Resources</div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>

          <div className={`${styles.row}`}>
            <div className={`${styles.dept_heading}`}>Computer Science & Engineering</div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>
              Computer Science & Engineering <br />
              (Artificial Intelligence){' '}
            </div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>Computer Science & Engineering</div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.dept_heading}`}>Center for Energy Studies</div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>Energy Technology</div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.dept_heading}`}>Chemical Engineering</div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>Chemical Engineering</div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.dept_heading}`}>Electrical Engineering</div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>
              Condition Monitoring of <br />
              Power Apparatus
            </div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>Power System</div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>Signal Processing & Control</div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.dept_heading}`}>Electronics & Communication Engineering</div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>Communication System & Networks</div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>VLSI Design</div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.dept_heading}`}>Material Science & Engineering</div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>Material Science & Engineering</div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.dept_heading}`}>Mechanical Engineering</div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>Design</div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>Manufacturing</div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>Thermal</div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.row_1} ${styles.even}`}>
        <div className={`${styles.col} ${styles.col_1}`}>6</div>
        <div className={styles.col}>Master of Business Administration (2-year course)</div>
        <div className={`${styles.col_3}`}>
          <div className={`${styles.row}`}>
            <div className={`${styles.dept_heading}`}>MBA</div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>
              (Marketing Mgmt.|Operations Mgmt.|
              <br />
              Financial Mgmt.|HR Mgmt.)
            </div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.row_1} ${styles.odd}`}>
        <div className={`${styles.col} ${styles.col_1}`}>7</div>
        <div className={styles.col}>M. Sc(2-year course)</div>
        <div className={`${styles.col_3}`}>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>Chemistry</div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>Mathematics & Computing</div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.col_3_1}`}>Physics & Photonics Science</div>
            <div className={`${styles.col_3_2}`}>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
