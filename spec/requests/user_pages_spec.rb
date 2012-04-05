# Command-Shift-R: run a single test (if run on an it block) or group of tests (if run on a describe block)
# Command-Shift-E: run the last test(s)
# Command-Shift-T: run all the tests in current file

require 'spec_helper'

describe "User pages" do

  subject { page }

  describe "signup page" do
    before { visit signup_path }

    it { should have_selector('h1',    text: 'Sign up') }
    it { should have_selector('title', text: full_title('Sign up')) }
  end
end