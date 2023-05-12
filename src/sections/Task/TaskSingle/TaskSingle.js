import { useNavigate, useParams } from 'react-router-dom';
import classNames from "classnames";
import toast from 'react-hot-toast';
import { useContext, useState } from "react";

import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Loader } from "../../../components/Loader";
import { DownloadButton } from "./components/DownloadButton/DownloadButton";

import { ReactComponent as LeftArrowFilled }  from "./assets/left-arrow-filled.svg";
import { ReactComponent as RightArrowFilled }  from "./assets/right-arrow-filled.svg";
import { ReactComponent as TipIcon }  from "./assets/tip-icon.svg";

import { useSingleTask } from "../../../hooks/useSingleTask";
import { verifyTask } from "../../../api/user";
import { ALL_NAMES } from "../../../api/constants";
import { EventContext } from "../../../context/event/context";

import styles from './TaskSingle.module.css';

const { KEY } = ALL_NAMES;

export const TaskSingle = () => {
  const { id } = useParams();
  const { data, isLoading } = useSingleTask(id);
  const { eventDetails } = useContext(EventContext);

  const navigate = useNavigate();

  const [answer, setAnswer] = useState("");

  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  const nextTask = () => navigate(`/tasks/${id < eventDetails?.totalNumberOfTasks ? Number(id) + 1 : id}`);
  const previousTask = () => navigate(`/tasks/${ id > 1 ? Number(id) - 1 : id }`);

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
        nextTask();
      }
    });
  }

  return (
    <div className={styles['single-task-page']}>
      {isLoading ? <Loader /> : null}

      <div className={styles['task-block-wrapper']}>
        <div className={styles['task-block']}>
          <div className={classNames(styles['task-header-wrapper'], styles['header-desktop'])}>
            <div className={styles['task-header']}>
              <h1 className={styles['task-name']}>
                {id}. {data?.name}
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

              <div className={styles.points}>{data?.score} points</div>
            </div>
          </div>
          <div className={styles['task-body']}>
            <div className={styles['task-wrapper']}>
              <div className={classNames(styles['task-header-wrapper'], styles['header-mobile'])}>
                <div className={styles['task-header']}>
                  <h1 className={styles['task-name']}>
                    {id}. {data?.name}
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

                  <div className={styles.points}>{data?.score} points</div>
                </div>
              </div>

              <div className={styles['task-content-block']}>
                <div className={styles.description}>
                  <h3 className={styles['description-label']}>Description</h3>

                  <div className={styles['description-content']}>
                    {data?.description}
                  </div>
                </div>

                <div className={styles.attachment}>
                  <h3 className={styles['attachment-label']}>Attachment</h3>
                  {data?.file ? <DownloadButton href={data?.href}/> : (
                    <span className={styles['attachment-placeholder']}>
                      The current task does not require any files.
                    </span>
                  )}
                </div>
              </div>
            </div>
            <form
              className={styles['submit-form']}
              onSubmit={handleVerify}
            >
              <h2 className={styles['form-label']}>
                Put your answer here:
              </h2>

              <div className={styles['submit-wrapper']}>
                <Input
                  rootClassName={styles['answer-input']}
                  placeholder='Key'
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
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
