class ApplicationRecord < ActiveRecord::Base
  after_validation :log_errors, :if => Proc.new { |m| m.errors }

  self.abstract_class = true

  private

  def log_errors
    error = <<~HEREDOC
      \n#{self.inspect}
      Validation error(s):
      #{self.errors.full_messages.join("\n")}
    HEREDOC

    Rails.logger.debug error.red
  end
end
