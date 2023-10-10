import React from 'react'
import styles from './JNFForm.module.scss'
import Util from './Util'

export default function EligibleBatches({ parentState, handleParentStateChange }) {
  const BTechBranches = [
    'Computer Science & Engineering',
    'Electronics & Communication Engineering',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Chemical Engineering',
    'Engineering Physics',
    'Engineering Chemistry',
    'Engineering Mathematics',
  ]
  const DualDegreeBranches = [
    'Computer Science & Engineering',
    'Electronics & Communication Engineering',
  ]
  const BArchBranches = ['Architecture']
  const MArchBranches = ['Sustainable Architecture']
  const MTechBranches = {
    CivilEngineering: [
      'Environment',
      'Geotechnical',
      'Structures',
      'Transportation',
      'Water Resources',
    ],
    ComputerScienceEngineering: [
      'Computer Science & Engineering (Artificial Intelligence)',
      'Computer Science & Engineering',
    ],
    CenterforEnergyStudies: ['Energy Technology'],
    ChemicalEngineering: ['Chemical Engineering'],
    ElectricalEngineering: [
      'Condition Monitoring of Power Apparatus',
      'Power System',
      'Signal Processing & Control',
    ],
    ElectronicsCommunicationEngineering: ['Communication System & Networks', 'VLSI Design'],
    MaterialScienceEngineering: ['Material Science & Engineering'],
    MechanicalEngineering: ['Design', 'Manufacturing', 'Thermal'],
  }
  const MBA = ['Marketing Mgmt.', 'Operations Mgmt.', 'Financial Mgmt.', 'HR Mgmt.']
  const MSc = ['Mathematics & Computing', 'Physics & Photonics Science']
  return (
    <div className={styles.form_comp}>
      <div className={styles.center}>Select Eligible Branches for Recruitment</div>
      <div className={`${styles.row_1} ${styles.main_heading}`}>
        <div className={`${styles.col} ${styles.col_1}`}>Sr No.</div>
        <div className={`${styles.col} ${styles.width}`}>Programs offered</div>
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
          {BTechBranches.map((branch) => (
            <Util key={branch} branchName={branch} />
          ))}
        </div>
      </div>

      <div className={`${styles.row_1} ${styles.even}`}>
        <div className={`${styles.col} ${styles.col_1}`}>2</div>
        <div className={styles.col}>Dual Degree (5-year course)</div>
        <div className={`${styles.col_3}`}>
          {DualDegreeBranches.map((branch) => (
            <Util key={branch} branchName={branch} />
          ))}
        </div>
      </div>

      <div className={`${styles.row_1} ${styles.odd}`}>
        <div className={`${styles.col} ${styles.col_1}`}>3</div>
        <div className={styles.col}>B.Arch (5-year course)</div>
        <div className={`${styles.col_3}`}>
          {BArchBranches.map((branch) => (
            <Util key={branch} branchName={branch} />
          ))}
        </div>
      </div>

      <div className={`${styles.row_1} ${styles.even}`}>
        <div className={`${styles.col} ${styles.col_1}`}>4</div>
        <div className={styles.col}>M.Arch (2-year course)</div>
        <div className={`${styles.col_3}`}>
          {MArchBranches.map((branch) => (
            <Util key={branch} branchName={branch} />
          ))}
        </div>
      </div>

      <div className={`${styles.row_1} ${styles.odd}`}>
        <div className={`${styles.col} ${styles.col_1}`}>5</div>
        <div className={styles.col}>M.Tech (2-year course)</div>
        <div className={`${styles.col_3}`}>
          <div className={`${styles.row}`}>
            <div className={`${styles.dept_heading}`}>Civil Engineering</div>
          </div>
          <div>
            {MTechBranches.CivilEngineering.map((branch) => (
              <Util key={branch} branchName={branch} />
            ))}
          </div>

          <div className={`${styles.row}`}>
            <div className={`${styles.dept_heading}`}>Computer Science & Engineering</div>
          </div>
          <div>
            {MTechBranches.ComputerScienceEngineering.map((branch) => (
              <Util key={branch} branchName={branch} />
            ))}
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.dept_heading}`}>Center for Energy Studies</div>
          </div>
          <div>
            {MTechBranches.CenterforEnergyStudies.map((branch) => (
              <Util key={branch} branchName={branch} />
            ))}
          </div>
          <div>
            <div className={`${styles.dept_heading}`}>Chemical Engineering</div>
          </div>
          <div>
            {MTechBranches.ChemicalEngineering.map((branch) => (
              <Util key={branch} branchName={branch} />
            ))}
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.dept_heading}`}>Electrical Engineering</div>
          </div>
          <div>
            {MTechBranches.ElectricalEngineering.map((branch) => (
              <Util key={branch} branchName={branch} />
            ))}
          </div>

          <div className={`${styles.row}`}>
            <div className={`${styles.dept_heading}`}>Electronics & Communication Engineering</div>
          </div>
          <div>
            {MTechBranches.ElectronicsCommunicationEngineering.map((branch) => (
              <Util key={branch} branchName={branch} />
            ))}
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.dept_heading}`}>Material Science & Engineering</div>
          </div>
          <div>
            {MTechBranches.MaterialScienceEngineering.map((branch) => (
              <Util key={branch} branchName={branch} />
            ))}
          </div>
          <div className={`${styles.row}`}>
            <div className={`${styles.dept_heading}`}>Mechanical Engineering</div>
          </div>

          <div>
            {MTechBranches.MechanicalEngineering.map((branch) => (
              <Util key={branch} branchName={branch} />
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.row_1} ${styles.even}`}>
        <div className={`${styles.col} ${styles.col_1}`}>6</div>
        <div className={styles.col}>Master of Business Administration</div>

        <div>
          {MBA.map((branch) => (
            <Util key={branch} branchName={branch} />
          ))}
        </div>
      </div>
      <div className={`${styles.row_1} ${styles.odd}`}>
        <div className={`${styles.col} ${styles.col_1}`}>7</div>
        <div className={styles.col}>M. Sc(2-year course)</div>

        <div>
          {MSc.map((branch) => (
            <Util key={branch} branchName={branch} />
          ))}
        </div>
      </div>
    </div>
  )
}
