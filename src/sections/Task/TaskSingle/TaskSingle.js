import { useNavigate, useParams } from 'react-router-dom';
import classNames from "classnames";
import toast from 'react-hot-toast';
import { useContext, useState, useMemo } from "react";

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
import { getTip, getSingleTask } from '../../../api/task';
import { TaskContext } from "../../../context/task/context";
import { EventContext } from "../../../context/event/context";
import { useUserStatistics } from "../../../hooks/useUserStatistics";
import { AuthContext } from "../../../context/auth/context";

import styles from './TaskSingle.module.css';

const { KEY } = ALL_NAMES;

export const TaskSingle = () => {
  const { id } = useParams();
  const { data, setData, isLoading, setIsLoading } = useSingleTask(id);
  const { taskCollection } = useContext(TaskContext);
  const { eventDetails } = useContext(EventContext);
  const { user } = useContext(AuthContext);

  const { stats } = useUserStatistics(user?.id);

  let tasksNumber = eventDetails?.totalNumberOfTasks;
  let tasksDone = stats?.tasksDone;

  const navigate = useNavigate();

  const [answer, setAnswer] = useState("");
  const [tip, setTip] = useState(null);
  const [isTipLoading, setIsTipLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const collection = useMemo(() => {
    return {
      firstItem: taskCollection.content[0],
      lastItem: taskCollection.content[taskCollection.content.length - 1],
      items: taskCollection.content,
      length: taskCollection.content.length,
    }
  }, [taskCollection]);

  const itemIndex = useMemo(() => {
    return taskCollection.content.indexOf(taskCollection.content.find(item => item.id === Number(id)));
  }, [id, taskCollection.content]);

  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  const nextTask = () => {
    navigate(`/tasks/${taskCollection.content[itemIndex + 1].id}`);
    setAnswer("");
    setIsError(false);
  };

  const previousTask = () => {
    navigate(`/tasks/${taskCollection.content[itemIndex - 1].id}`);
    setAnswer("");
    setIsError(false);
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    const body = {
      [KEY]: answer,
    }

    verifyTask(body, id).then(response => {
      if (response.status !== 'SUCCESS') {
        setIsError(true);
        notifyError(response.title);
        setAnswer("");
      } else {
        setIsError(false);
        notifySuccess("Key is correct!");
        nextTask();
      }
    });

    if (tasksDone === tasksNumber) {
      navigate('/tasks/finally');
    }
  }

  const handleUseTip = () => {
    setIsTipLoading(true);
    getTip(id).then(response => {
      const { title } = response;

      if (!title) {
        setTip(response);
        setIsLoading(true);
        getSingleTask(id).then(response => {
          const { title } = response;

          if (!title) {
            setData(response);
          } else {
            notifyError(title);
          }
        }).finally(() => setIsLoading(false));
      } else {
        notifyError(title);
      }
    }).finally(() => setIsTipLoading(false));

    return { tip, isLoading };
  }

  const handleFinishQuiz = () => {
    navigate('/tasks/finally');
  }

  if (tasksDone === tasksNumber) {
    navigate('/tasks/finally');
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

              {data?.numberOfTips ? (
                <div className={styles['tip-block']}>
                  <Button
                    rootClassName={styles['tip-button']}
                    icon={ <TipIcon /> }
                    iconClassName={styles['tip-icon']}
                    variant='secondary-outlined'
                    disabled={isTipLoading || data?.numberOfTips === data?.tips.length}
                    onClick={handleUseTip}
                  >
                    Use tip
                  </Button>
                  <div className={styles['tip-label']}>
                    -50% of points
                  </div>
                </div>
              ) : null}
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

                  {data?.numberOfTips ? (
                    <div className={styles['tip-block']}>
                      <Button
                        rootClassName={styles['tip-button']}
                        icon={ <TipIcon /> }
                        iconClassName={styles['tip-icon']}
                        variant='secondary-outlined'
                        disabled={isTipLoading || data?.numberOfTips === data?.tips.length}
                        onClick={handleUseTip}
                      >
                        Use tip
                      </Button>
                      <div className={styles['tip-label']}>
                        -50% of points
                      </div>
                    </div>
                  ) : null}
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
                  {data?.file ? <DownloadButton href={data?.file.url}/> : (
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
                  rootClassName={styles['answer-input-wrapper']}
                  inputRootClassName={classNames(styles['answer-input'], {[styles['input-error']] : isError})}
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

                <Button
                  variant='secondary'
                  rootClassName={styles.finishBtn}
                  onClick={handleFinishQuiz}
                >
                  Finish quiz
                </Button>
              </div>
            </form>
          </div>

          {data?.tips.length ? (
            <div className={styles.tipsBlock}>
              <h3 className={styles['description-label']}>Tips</h3>
              {data?.tips.map((item, index) => (
                <div className={styles.tipsItem} key={index}>{item}</div>
              ))}
            </div>
          ) : null}
        </div>

        <div className={styles['control-buttons']}>
          <Button
            rootClassName={styles['control-button']}
            icon={ <LeftArrowFilled /> }
            iconClassName={styles['left-arrow-filled']}
            variant='tertiary'
            disabled={Number(id) === collection.firstItem.id}
            onClick={ previousTask }
          >
            Previous task
          </Button>
          <Button
            rootClassName={styles['control-button']}
            iconClassName={styles['right-arrow-filled']}
            icon={ <RightArrowFilled /> }
            variant='tertiary'
            disabled={Number(id) === collection.lastItem.id}
            onClick={ nextTask }
          >
            Next task
          </Button>
        </div>
      </div>
    </div>
  );
}
