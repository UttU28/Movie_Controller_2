import subprocess 
from time import sleep
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup


PTATH_TILL_PROJECT = 'C:/Users/utsav/OneDrive/Desktop/Movie_Controller_2/'
# PTATH_TILL_PROJECT = "C:/Users/UtsavChaudhary/OneDrive - EDGE196/Desktop/Movie_Controller_2/"
chromeDriverPath = f'{PTATH_TILL_PROJECT}backend/chromeDriver/chromedriver.exe'

options = Options()
options.add_experimental_option("debuggerAddress", "localhost:8989")
options.add_argument(f"webdriver.chrome.driver={chromeDriverPath}")
options.add_argument("--disable-notifications")
options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
options.add_argument("window-size=1920x1080")

def prepareChromeAndSelenium(wantChrome):
    if wantChrome:
        subprocess.Popen([
            'C:/Program Files/Google/Chrome/Application/chrome.exe',
            '--remote-debugging-port=8989',
            f'--user-data-dir={PTATH_TILL_PROJECT}backend/chromeData/'
        ])
    # chromeProcess = ''
    driver = webdriver.Chrome(options=options)
    return driver


async def scrapeDataFrom(thisDriver, companyName, lastName, firstName):
    thisDriver.get(f"https://www.linkedin.com/search/results/people/?company={companyName}&firstName={firstName}&lastName={lastName}&origin=FACETED_SEARCH")
    srContainer = WebDriverWait(thisDriver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, 'search-results-container'))
    )