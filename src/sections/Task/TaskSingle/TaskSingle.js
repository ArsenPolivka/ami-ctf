import { useNavigate, useParams } from 'react-router-dom';
import classNames from "classnames";
import toast from 'react-hot-toast';
import { useState } from "react";

import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

import { ReactComponent as LeftArrowFilled }  from "./assets/left-arrow-filled.svg";
import { ReactComponent as RightArrowFilled }  from "./assets/right-arrow-filled.svg";
import { ReactComponent as Download }  from "./assets/download-icon.svg";
import { ReactComponent as TipIcon }  from "./assets/tip-icon.svg";

import { verifyTask } from "../../../api/user";
import { ALL_NAMES } from "../../../api/constants";

import styles from './TaskSingle.module.css';

const { KEY } = ALL_NAMES;

export const TaskSingle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [answer, setAnswer] = useState("");

  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  const handleVerify = async (e) => {
    e.preventDefault();

    const body = {
      [KEY]: answer,
    }

    verifyTask(body, id).then(response => {
      if (response.error) {
        notifyError(response.message);
      } else {
        notifySuccess("Key is correct!");
        navigate(`/tasks/${Number(id) + 1}`);
      }
    });
  }

  const nextTask = () => navigate(`/tasks/${Number(id) + 1}`);
  const previousTask = () => navigate(`/tasks/${ id > 1 ? Number(id) - 1 : id }`);

  return (
    <div className={styles['single-task-page']}>

      <div className={styles['task-block-wrapper']}>
        <div className={styles['task-block']}>
          <div className={classNames(styles['task-header-wrapper'], styles['header-desktop'])}>
            <div className={styles['task-header']}>
              <h1 className={styles['task-name']}>
                {id}. Task name
              </h1>

              <div className={styles['tip-block']}>
                <Button
                    rootClassName={styles['tip-button']}
                    icon={ <TipIcon /> }
                    iconClassName={styles['tip-icon']}
                    variant='secondary-outlined'
                >
                  Use tip
                </Button>
                <div className={styles['tip-label']}>
                  -50% of points
                </div>
              </div>
            </div>

            <div className={styles['task-cost']}>
              <div className={styles['cost-label']}>Task cost:</div>

              <div className={styles.points}>5 points</div>
            </div>
          </div>
          <div className={styles['task-body']}>
            <div className={styles['task-wrapper']}>
              <div className={classNames(styles['task-header-wrapper'], styles['header-mobile'])}>
                <div className={styles['task-header']}>
                  <h1 className={styles['task-name']}>
                    {id}. Task name
                  </h1>

                  <div className={styles['tip-block']}>
                    <Button
                        rootClassName={styles['tip-button']}
                        icon={ <TipIcon /> }
                        iconClassName={styles['tip-icon']}
                        variant='secondary-outlined'
                    >
                      Use tip
                    </Button>
                    <div className={styles['tip-label']}>
                      -50% of points
                    </div>
                  </div>
                </div>

                <div className={styles['task-cost']}>
                  <div className={styles['cost-label']}>Task cost:</div>

                  <div className={styles.points}>5 points</div>
                </div>
              </div>

              <div className={styles['task-content-block']}>
                <div className={styles.description}>
                  <h3 className={styles['description-label']}>Description</h3>
                  <div className={styles['description-content']}>
                    Research a software program that requires a license key for activation.
                    Find a legitimate source for the license key, such as the software
                    vendor's website, and compare it to other sources offering the key.
                    Analyze the potential risks and benefits of using each source and
                    write a report explaining which source you would choose and why.
                  </div>
                </div>

                <div className={styles.attachment}>
                  <h3 className={styles['attachment-label']}>Attachment</h3>
                  <Button
                      rootClassName={styles['attachment-button']}
                      icon={ <Download /> }
                      iconClassName={styles['download-icon']}
                      variant='attach'
                  >
                    filename.cs
                  </Button>
                </div>
              </div>
            </div>
            <form className={styles['submit-form']}
                  onSubmit={handleVerify}
            >
              <h2 className={styles['form-label']}>
                Put your answer here:
              </h2>
              <div className={styles['submit-wrapper']}>
                <Input placeholder='Key'
                       value={answer}
                       onChange={(e) => setAnswer(e.target.value)}
                       rootClassName={styles['answer-input']}
                />
                <Button
                    type='submit'
                    variant='primary'
                    rootClassName={styles['submit-answer-button']}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className={styles['control-buttons']}>
          <Button
              rootClassName={styles['control-button']}
              icon={ <LeftArrowFilled /> }
              iconClassName={styles['left-arrow-filled']}
              variant='tertiary'
              onClick={ previousTask }
          >
            Previous task
          </Button>
          <Button
              rootClassName={styles['control-button']}
              iconClassName={styles['right-arrow-filled']}
              icon={ <RightArrowFilled /> }
              variant='tertiary'
              onClick={ nextTask }
          >
            Next task
          </Button>
        </div>
      </div>
    </div>
  );
}
